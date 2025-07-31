import React, { useState, useEffect, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, updateDoc, increment, setDoc, arrayUnion } from 'firebase/firestore';
import { Star, StarOff, Filter, Upload, FilePenLine, ThumbsUp, ThumbsDown, Download } from 'lucide-react';

// Shadcn UI component definitions to resolve import errors
// All components are self-contained and use Tailwind CSS for styling

// Icon for the loader
const Loader2 = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

// Card components
const Card = ({ className, ...props }) => (
  <div
    className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}
    {...props}
  />
);
const CardHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />
);
const CardTitle = ({ className, ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);
const CardDescription = ({ className, ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
);
const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);
const CardFooter = ({ className, ...props }) => (
  <div className={`flex items-center p-6 pt-0 ${className}`} {...props} />
);

// Form components
const Label = ({ className, ...props }) => (
  <label
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  />
);
const Input = ({ className, type, ...props }) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);
const Textarea = ({ className, ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);
const Button = ({ className, ...props }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ${className}`}
    {...props}
  />
);

// Select components
const SelectValue = ({ placeholder, children, ...props }) => (
  <span {...props}>{children || placeholder}</span>
);

const SelectTrigger = ({ children, className, onClick, ...props }) => (
  <button
    type="button"
    className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 opacity-50"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </button>
);

const SelectContent = ({ children, ...props }) => (
  <div
    className="absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 w-full mt-1"
    {...props}
  >
    <div className="p-1 max-h-60 overflow-y-auto">{children}</div>
  </div>
);

const SelectItem = ({ children, className, value, onClick, isSelected, ...props }) => (
  <div
    className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${isSelected ? 'bg-accent text-accent-foreground' : ''} ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
);

const Select = ({ children, value, onValueChange, placeholder, ...props }) => {
  const [open, setOpen] = useState(false);
  const selectRef = useRef(null);

  const handleItemClick = (itemValue) => {
    onValueChange(itemValue);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const contentChildren = React.Children.toArray(children).find(child => child.type === SelectContent)?.props?.children;

  const selectedItem = React.Children.toArray(contentChildren).find(child => child.props.value === value);

  return (
    <div className="relative w-full" ref={selectRef}>
      <SelectTrigger onClick={() => setOpen(!open)} {...props}>
        <SelectValue placeholder={placeholder}>
          {selectedItem ? selectedItem.props.children : null}
        </SelectValue>
      </SelectTrigger>
      {open && (
        <SelectContent>
          {React.Children.map(contentChildren, (child) =>
            React.cloneElement(child, {
              onClick: () => handleItemClick(child.props.value),
              isSelected: child.props.value === value,
            })
          )}
        </SelectContent>
      )}
    </div>
  );
};

// Dialog components
const Dialog = ({ open, onOpenChange, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && onOpenChange) {
      onOpenChange(false);
    }
  };
  return (
    open && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        onClick={handleOverlayClick}
      >
        {children}
      </div>
    )
  );
};
const DialogContent = ({ className, ...props }) => (
  <div
    className={`relative z-50 grid w-full max-w-lg gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg md:w-full ${className}`}
    {...props}
  />
);
const DialogHeader = ({ className, ...props }) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
);
const DialogTitle = ({ className, ...props }) => (
  <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
);
const DialogDescription = ({ className, ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props} />
);


// Custom dialog component to replace alert() and confirm()
const CustomDialog = ({ isOpen, title, description, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

// Custom confirmation dialog
const ConfirmationDialog = ({ isOpen, title, description, onConfirm, onCancel }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <Button onClick={onCancel} className="bg-gray-500 hover:bg-gray-600 text-white">
            Cancel
          </Button>
          <Button onClick={onConfirm} className="bg-red-500 hover:bg-red-600 text-white">
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Custom dialog for displaying changelog
const ChangelogDialog = ({ isOpen, onOpenChange, levelName, changelog }) => {
  // Sort changelog by timestamp, newest first
  const sortedChangelog = [...changelog].sort((a, b) => b.timestamp.toDate() - a.timestamp.toDate());

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Changelog for {levelName}</DialogTitle>
          <DialogDescription>
            A history of updates made to this level.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          {sortedChangelog.length > 0 ? (
            sortedChangelog.map((entry, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <p className="text-sm text-gray-500 italic">
                  {entry.timestamp?.toDate().toLocaleString()}
                </p>
                <p className="mt-1 text-gray-800">{entry.message}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No changelog entries available.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};


// Constants for filters and tags
const difficulties = ['Easy', 'Normal', 'Hard', 'Insane'];
const editorTypes = ['Legacy Level Editor', 'Level Editor Rewrite'];
const predefinedTags = [
  'Easy', 'Normal', 'Hard', 'Insane', 'Joke', 'Challenge', 'Crazy',
  'Small Level', 'Medium Level', 'Large Level', 'Fun', 'Puzzle', 'Recreation',
  'Horror', 'Speedrun', 'Original', 'Classic', 'Stealth', 'Exploration',
  'Chase', 'Story', 'Maze', 'External Mods', 'Unfinished', 'WIP', 'Concept'
];
const predefinedMods = [
  'Expanded Level Editor',
  "Baldi's Basics Times",
  "Baldi's Basics: Advanced Edition",
  "Baldi's Basics Extra",
  'Eco-Friendly',
  "Baldi's Brand New Game Plus",
  'Extra YTPs',
  'Carnival Pack',
  'Pirate Pack',
  'Criminal Pack',
  "B. Carnell's Plus Pack",
  'Phonty in Plus',
  'The Rolling Giant'
];

const App = () => {
  // State for Firebase and authentication
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  // State for the form inputs and file
  const [levelName, setLevelName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [tags, setTags] = useState([]);
  const [requiredMods, setRequiredMods] = useState([]);
  const [levelFile, setLevelFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [screenshots, setScreenshots] = useState([]);

  // State for the list of levels and loading state
  const [levels, setLevels] = useState([]);
  const [favoritedLevelIds, setFavoritedLevelIds] = useState([]);
  const [likedLevelIds, setLikedLevelIds] = useState({}); // Stores user's like/dislike status: {levelId: 1 or -1}
  const [displayedLevels, setDisplayedLevels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficultyFilter, setSelectedDifficultyFilter] = useState('');
  const [selectedEditorFilter, setSelectedEditorFilter] = useState('');
  const [selectedTagFilters, setSelectedTagFilters] = useState([]);
  const [selectedModFilters, setSelectedModFilters] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  
  // State for view mode toggle
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  // State for the custom dialog and deletion confirmation
  const [dialog, setDialog] = useState({
    isOpen: false,
    title: '',
    description: '',
  });
  const [deleteConfirm, setDeleteConfirm] = useState({
    isOpen: false,
    levelId: null,
  });

  // State for updating a level file
  const [updateDialog, setUpdateDialog] = useState({
    isOpen: false,
    levelId: null,
    levelName: '',
  });
  const [updateFile, setUpdateFile] = useState(null);
  const [updateChangelog, setUpdateChangelog] = useState(''); // State for changelog text
  const [isUpdating, setIsUpdating] = useState(false);
  
  // State for changelog dialog
  const [changelogDialog, setChangelogDialog] = useState({
    isOpen: false,
    levelName: '',
    changelog: [],
  });

  // Global variables from the canvas environment
  const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
  const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
  const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

  // Initialize Firebase and set up authentication
  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      const authInstance = getAuth(app);
      const dbInstance = getFirestore(app);
      setDb(dbInstance);
      setAuth(authInstance);

      const authenticate = async () => {
        try {
          if (initialAuthToken) {
            await signInWithCustomToken(authInstance, initialAuthToken);
          } else {
            await signInAnonymously(authInstance);
          }
        } catch (error) {
          console.error("Firebase authentication error:", error);
          setDialog({
            isOpen: true,
            title: "Authentication Error",
            description: "Failed to authenticate with Firebase. Please try reloading the page.",
          });
        }
      };

      authenticate();
    } catch (error) {
      console.error("Firebase initialization error:", error);
      setDialog({
        isOpen: true,
        title: "Initialization Error",
        description: "Failed to initialize Firebase. Please check the configuration.",
      });
    }
  }, []);

  // Handles Authentication State and Data Fetching
  useEffect(() => {
    if (!auth || !db) return;

    let unsubscribeLevels = () => {};
    let unsubscribeFavorites = () => {};
    let unsubscribeLikes = () => {};
    
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      unsubscribeLevels();
      unsubscribeFavorites();
      unsubscribeLikes();
      
      if (user) {
        console.log("User authenticated:", user.uid);
        setUserId(user.uid);
        setIsAuthReady(true);
        setIsLoading(true);

        // Listen for all levels
        const levelsCollectionPath = `/artifacts/${appId}/public/data/levels`;
        const levelsCollection = collection(db, levelsCollectionPath);
        unsubscribeLevels = onSnapshot(levelsCollection, (snapshot) => {
          const fetchedLevels = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setLevels(fetchedLevels);
        }, (error) => {
          console.error("Error fetching levels: ", error);
          setDialog({
            isOpen: true,
            title: "Data Fetching Error",
            description: "Failed to load levels from the database. Please try reloading.",
          });
        });

        // Listen for user's favorited levels
        const favoritesCollectionPath = `/artifacts/${appId}/users/${user.uid}/favorites`;
        const favoritesCollection = collection(db, favoritesCollectionPath);
        unsubscribeFavorites = onSnapshot(favoritesCollection, (snapshot) => {
          const fetchedFavorites = snapshot.docs.map(doc => doc.id);
          setFavoritedLevelIds(fetchedFavorites);
        }, (error) => {
          console.error("Error fetching favorites: ", error);
          setDialog({
            isOpen: true,
            title: "Data Fetching Error",
            description: "Failed to load favorites from the database. Please try reloading.",
          });
        });

        // Listen for user's liked/disliked levels
        const likesCollectionPath = `/artifacts/${appId}/users/${user.uid}/likes`;
        const likesCollection = collection(db, likesCollectionPath);
        unsubscribeLikes = onSnapshot(likesCollection, (snapshot) => {
          const fetchedLikes = {};
          snapshot.docs.forEach(doc => {
            fetchedLikes[doc.id] = doc.data().vote;
          });
          setLikedLevelIds(fetchedLikes);
          setIsLoading(false);
        }, (error) => {
          console.error("Error fetching likes:", error);
          setDialog({
            isOpen: true,
            title: "Data Fetching Error",
            description: "Failed to load your voting history. Please try reloading.",
          });
          setIsLoading(false);
        });

      } else {
        console.log("No user found. Displaying empty list.");
        setUserId(null);
        setIsAuthReady(false);
        setLevels([]);
        setFavoritedLevelIds([]);
        setLikedLevelIds({});
        setIsLoading(false);
      }
    });

    return () => {
      console.log("Cleaning up listeners...");
      unsubscribeAuth();
      unsubscribeLevels();
      unsubscribeFavorites();
      unsubscribeLikes();
    };
  }, [auth, db, appId]);


  // Handles filtering and sorting of levels
  useEffect(() => {
    let filtered = [...levels];

    // Filter by favorites if enabled
    if (showFavoritesOnly) {
      filtered = filtered.filter(level => favoritedLevelIds.includes(level.id));
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(level =>
        level.name.toLowerCase().includes(query) ||
        level.description.toLowerCase().includes(query) ||
        (level.author && level.author.toLowerCase().includes(query))
      );
    }

    // Filter by difficulty
    if (selectedDifficultyFilter) {
      filtered = filtered.filter(level => level.difficulty === selectedDifficultyFilter);
    }

    // Filter by editor type
    if (selectedEditorFilter) {
      filtered = filtered.filter(level => getEditorType(level.fileName) === selectedEditorFilter);
    }

    // Filter by tags
    if (selectedTagFilters.length > 0) {
      filtered = filtered.filter(level =>
        level.tags && level.tags.some(tag => selectedTagFilters.includes(tag))
      );
    }

    // Filter by required mods
    if (selectedModFilters.length > 0) {
      filtered = filtered.filter(level =>
        level.requiredMods && level.requiredMods.some(mod => selectedModFilters.includes(mod))
      );
    }

    // Apply sorting
    if (sortBy === 'most-downloads') {
      filtered.sort((a, b) => (b.downloadCount || 0) - (a.downloadCount || 0));
    } else if (sortBy === 'least-downloads') {
      filtered.sort((a, b) => (a.downloadCount || 0) - (b.downloadCount || 0));
    } else if (sortBy === 'most-liked') {
      filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortBy === 'least-liked') {
      filtered.sort((a, b) => (a.likes || 0) - (b.likes || 0));
    } else if (sortBy === 'name-az') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-za') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'date-uploaded' || sortBy === '') {
      // Default sort by timestamp (newest first)
      filtered.sort((a, b) => (b.timestamp?.toDate() || 0) - (a.timestamp?.toDate() || 0));
    }

    setDisplayedLevels(filtered);
  }, [levels, favoritedLevelIds, showFavoritesOnly, searchQuery, selectedDifficultyFilter, selectedEditorFilter, selectedTagFilters, selectedModFilters, sortBy]);


  // Determines the editor type based on the file extension
  const getEditorType = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    if (extension === 'bld') {
      return 'Legacy Level Editor';
    } else if (extension === 'ebpl') {
      return 'Level Editor Rewrite';
    }
    return 'Unknown';
  };

  // Handles the level file selection
  const handleLevelFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (['bld', 'ebpl'].includes(fileExtension)) {
        setLevelFile(file);
        setFileName(file.name);
      } else {
        setDialog({
          isOpen: true,
          title: "Invalid File Type",
          description: "Please upload a file with one of the following extensions: .bld or .ebpl.",
        });
        e.target.value = null; // Reset the file input
      }
    } else {
      setLevelFile(null);
      setFileName('');
    }
  };

  // Handles screenshot file selection
  const handleScreenshotChange = (e) => {
    const files = Array.from(e.target.files);
    setScreenshots(files);
  };

  // Helper function to read a file as a base64 string
  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Handles the form submission to upload a new level
  const handleUpload = async (e) => {
    e.preventDefault();
    if (!levelFile || !levelName || !description || !authorName || !difficulty || !db || !userId) {
      setDialog({
        isOpen: true,
        title: "Missing Information",
        description: "Please fill out all the required fields (*). Ensure you are signed in.",
      });
      return;
    }

    setIsUploading(true);
    try {
      const levelFilePromise = readFileAsBase64(levelFile);
      const screenshotPromises = screenshots.map(file => readFileAsBase64(file));
      
      const [levelContent, ...screenshotContents] = await Promise.all([
        levelFilePromise,
        ...screenshotPromises
      ]);

      const levelsCollectionPath = `/artifacts/${appId}/public/data/levels`;
      const levelsCollection = collection(db, levelsCollectionPath);

      await addDoc(levelsCollection, {
        name: levelName,
        author: authorName,
        description: description,
        difficulty: difficulty,
        tags: tags,
        requiredMods: requiredMods,
        fileName: fileName,
        mimeType: levelFile.type || 'application/octet-stream',
        fileContent: levelContent.split(',')[1],
        screenshots: screenshotContents,
        uploadedBy: userId,
        downloadCount: 0,
        likes: 0, // Initialize likes count
        dislikes: 0, // Initialize dislikes count
        changelog: [],
        timestamp: new Date(),
      });

      // Reset form fields
      setLevelName('');
      setAuthorName('');
      setDescription('');
      setDifficulty('');
      setTags([]);
      setRequiredMods([]);
      setScreenshots([]);
      setLevelFile(null);
      setFileName('');
      document.getElementById('level-file').value = null;
      document.getElementById('screenshots').value = null;

      setDialog({
        isOpen: true,
        title: "Upload Successful",
        description: "Your level has been successfully uploaded!",
      });
    } catch (error) {
      console.error("Error uploading level:", error);
      setDialog({
        isOpen: true,
        title: "Upload Failed",
        description: `There was an error uploading your level: ${error.message}`,
      });
    } finally {
      setIsUploading(false);
    }
  };

  // Handles the download of a level file and increments the counter
  const handleDownload = async (level) => {
    try {
      const mimeType = level.mimeType || 'application/octet-stream';
      const byteCharacters = atob(level.fileContent);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', level.fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      if (db && level.id) {
        const levelsCollectionPath = `/artifacts/${appId}/public/data/levels`;
        const docRef = doc(db, levelsCollectionPath, level.id);
        await updateDoc(docRef, {
          downloadCount: increment(1)
        });
      }
    } catch (error) {
      console.error("Error downloading file:", error);
      setDialog({
        isOpen: true,
        title: "Download Failed",
        description: `There was an error downloading the file: ${error.message}`,
      });
    }
  };

  // Handles the favorite/unfavorite action
  const handleFavoriteToggle = async (levelId) => {
    if (!db || !userId) {
      setDialog({
        isOpen: true,
        title: "Authentication Required",
        description: "You must be signed in to favorite levels.",
      });
      return;
    }

    try {
      const favoritesCollectionPath = `/artifacts/${appId}/users/${userId}/favorites`;
      const docRef = doc(db, favoritesCollectionPath, levelId);

      if (favoritedLevelIds.includes(levelId)) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { timestamp: new Date() });
      }
    } catch (error) {
      console.error("Error toggling favorite status:", error);
      setDialog({
        isOpen: true,
        title: "Favorite Failed",
        description: "There was an error updating your favorite levels. Please try again.",
      });
    }
  };

  // Handles the like/dislike action
  const handleVote = async (levelId, voteType) => {
    if (!db || !userId) {
      setDialog({
        isOpen: true,
        title: "Authentication Required",
        description: "You must be signed in to like or dislike levels.",
      });
      return;
    }

    try {
      const levelsCollectionPath = `/artifacts/${appId}/public/data/levels`;
      const levelDocRef = doc(db, levelsCollectionPath, levelId);
      const userVotesCollectionPath = `/artifacts/${appId}/users/${userId}/likes`;
      const userVoteDocRef = doc(db, userVotesCollectionPath, levelId);

      const currentVote = likedLevelIds[levelId];
      let newVote = 0;
      let updateData = {};

      if (voteType === 'like') {
        if (currentVote === 1) {
          // Un-like
          newVote = 0;
          updateData = { likes: increment(-1) };
        } else if (currentVote === -1) {
          // Change from dislike to like
          newVote = 1;
          updateData = { likes: increment(1), dislikes: increment(-1) };
        } else {
          // New like
          newVote = 1;
          updateData = { likes: increment(1) };
        }
      } else if (voteType === 'dislike') {
        if (currentVote === -1) {
          // Un-dislike
          newVote = 0;
          updateData = { dislikes: increment(-1) };
        } else if (currentVote === 1) {
          // Change from like to dislike
          newVote = -1;
          updateData = { likes: increment(-1), dislikes: increment(1) };
        } else {
          // New dislike
          newVote = -1;
          updateData = { dislikes: increment(1) };
        }
      }

      // Update level's like/dislike counts in public collection
      await updateDoc(levelDocRef, updateData);
      
      // Update the user's vote status in private collection
      if (newVote === 0) {
        await deleteDoc(userVoteDocRef);
      } else {
        await setDoc(userVoteDocRef, { vote: newVote });
      }
    } catch (error) {
      console.error("Error toggling vote status:", error);
      setDialog({
        isOpen: true,
        title: "Voting Failed",
        description: "There was an error updating your vote. Please try again.",
      });
    }
  };


  // Handles displaying the delete confirmation dialog
  const handleDeleteClick = (levelId) => {
    setDeleteConfirm({
      isOpen: true,
      levelId,
    });
  };

  // Handles the actual deletion after confirmation
  const handleConfirmDelete = async () => {
    const levelId = deleteConfirm.levelId;
    setDeleteConfirm({ isOpen: false, levelId: null });
    
    if (!levelId || !db) return;

    try {
      const levelsCollectionPath = `/artifacts/${appId}/public/data/levels`;
      const docRef = doc(db, levelsCollectionPath, levelId);
      await deleteDoc(docRef);
      setDialog({
        isOpen: true,
        title: "Deletion Successful",
        description: "The level has been successfully deleted.",
      });
    } catch (error) {
      console.error("Error deleting level:", error);
      setDialog({
        isOpen: true,
        title: "Deletion Failed",
        description: `There was an error deleting the level: ${error.message}`,
      });
    }
  };

  // Handles opening the update file dialog
  const handleUpdateClick = (level) => {
    setUpdateDialog({
      isOpen: true,
      levelId: level.id,
      levelName: level.name,
    });
  };

  // Handles updating the level file in Firestore
  const handleUpdateFile = async (e) => {
    e.preventDefault();
    if (!updateFile || !updateDialog.levelId || !db) {
      setDialog({
        isOpen: true,
        title: "Missing Information",
        description: "Please select a new level file to upload.",
      });
      return;
    }

    setIsUpdating(true);
    try {
      const newFileContent = await readFileAsBase64(updateFile);
      const levelsCollectionPath = `/artifacts/${appId}/public/data/levels`;
      const docRef = doc(db, levelsCollectionPath, updateDialog.levelId);
      
      const updateData = {
        fileName: updateFile.name,
        mimeType: updateFile.type || 'application/octet-stream',
        fileContent: newFileContent.split(',')[1],
        lastUpdated: new Date(),
      };

      // If a changelog message was provided, add it to the changelog array
      if (updateChangelog.trim()) {
        updateData.changelog = arrayUnion({
          message: updateChangelog,
          timestamp: new Date(),
        });
      }

      await updateDoc(docRef, updateData);

      setDialog({
        isOpen: true,
        title: "Update Successful",
        description: "The level file has been successfully updated!",
      });

      setUpdateDialog({ isOpen: false, levelId: null, levelName: '' });
      setUpdateFile(null);
      setUpdateChangelog(''); // Reset the changelog input
    } catch (error) {
      console.error("Error updating level file:", error);
      setDialog({
        isOpen: true,
        title: "Update Failed",
        description: `There was an error updating the level file: ${error.message}`,
      });
    } finally {
      setIsUpdating(false);
    }
  };
  
  // Toggle tag selection for upload form
  const handleTagToggle = (tag) => {
    setTags(prevTags => 
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Toggle required mod selection for upload form
  const handleModToggle = (mod) => {
    setRequiredMods(prevMods => 
      prevMods.includes(mod)
        ? prevMods.filter(m => m !== mod)
        : [...prevMods, mod]
    );
  };
  
  // Toggle filter tag selection
  const handleFilterTagToggle = (tag) => {
    setSelectedTagFilters(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Toggle filter mod selection
  const handleFilterModToggle = (mod) => {
    setSelectedModFilters(prevMods =>
      prevMods.includes(mod)
        ? prevMods.filter(m => m !== mod)
        : [...prevMods, mod]
    );
  };


  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDifficultyFilter('');
    setSelectedEditorFilter('');
    setSelectedTagFilters([]);
    setSelectedModFilters([]);
    setSortBy('');
    setShowFavoritesOnly(false);
  };
  
  const openChangelogDialog = (level) => {
    setChangelogDialog({
      isOpen: true,
      levelName: level.name,
      changelog: level.changelog || [],
    });
  };

  // SVG icons for view toggle
  const gridIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" /></svg>
  );

  const listIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"><line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" /></svg>
  );

  // Get the top 3 most downloaded levels for the featured section
  const getFeaturedLevels = () => {
    const sortedLevels = [...levels].sort((a, b) => (b.downloadCount || 0) - (a.downloadCount || 0));
    return sortedLevels.slice(0, 3);
  };

  const featuredLevels = getFeaturedLevels();


  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-sans antialiased flex flex-col">
      <CustomDialog
        isOpen={dialog.isOpen}
        title={dialog.title}
        description={dialog.description}
        onOpenChange={() => setDialog({ ...dialog, isOpen: false })}
      />
      <ConfirmationDialog
        isOpen={deleteConfirm.isOpen}
        title="Confirm Deletion"
        description="Are you sure you want to delete this level? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteConfirm({ isOpen: false, levelId: null })}
      />
      {/* Dialog for updating the level file and adding a changelog */}
      <Dialog
        open={updateDialog.isOpen}
        onOpenChange={(open) => setUpdateDialog({ ...updateDialog, isOpen: open })}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Level File</DialogTitle>
            <DialogDescription>
              Replace the level file for <span className="font-semibold">{updateDialog.levelName}</span>.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateFile} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="update-file">New Level File <span className="text-red-500">*</span></Label>
                <Input
                  id="update-file"
                  type="file"
                  accept=".bld, .ebpl"
                  onChange={(e) => setUpdateFile(e.target.files[0])}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="update-changelog">Changelog (Optional)</Label>
                <Textarea
                  id="update-changelog"
                  placeholder="Describe the changes in this update..."
                  value={updateChangelog}
                  onChange={(e) => setUpdateChangelog(e.target.value)}
                />
              </div>
            </div>
            <Button type="submit" disabled={isUpdating} className="w-full">
              {isUpdating ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </span>
              ) : (
                'Update File'
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      {/* Dialog for viewing the changelog */}
      <ChangelogDialog
        isOpen={changelogDialog.isOpen}
        onOpenChange={() => setChangelogDialog({ ...changelogDialog, isOpen: false })}
        levelName={changelogDialog.levelName}
        changelog={changelogDialog.changelog}
      />
      <div className="max-w-6xl mx-auto space-y-8 flex-grow">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-gray-900 mb-2">
            Baldi's Basics Plus Level Database
          </h1>
          {userId && (
            <p className="text-sm text-gray-500">
              Your User ID: {userId}
            </p>
          )}
        </header>

        {/* Upload Section */}
        <Card className="bg-white shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Upload a New Level</CardTitle>
            <CardDescription>
              Share your custom Baldi's Basics Plus levels with the community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Accepted level file types are: <span className="font-mono bg-gray-200 px-1 py-0.5 rounded-md">.bld</span> and <span className="font-mono bg-gray-200 px-1 py-0.5 rounded-md">.ebpl</span>.
              <br/>
              <span className="font-semibold text-red-500">*</span> indicates a required field.
            </p>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="level-name">Level Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="level-name"
                    placeholder="e.g., 'My First Baldi Level'"
                    value={levelName}
                    onChange={(e) => setLevelName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="author-name">Author Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="author-name"
                    placeholder="Your name or username"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your level..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="difficulty">Difficulty <span className="text-red-500">*</span></Label>
                  <Select value={difficulty} onValueChange={setDifficulty} placeholder="Select difficulty...">
                    <SelectTrigger />
                    <SelectContent>
                      <SelectItem value="">Select a difficulty</SelectItem>
                      {difficulties.map(d => (
                        <SelectItem key={d} value={d}>{d}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Tags (Optional)</Label>
                  <div className="flex flex-wrap gap-2">
                    {predefinedTags.map(tag => (
                      <Button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`text-xs px-2 py-1 h-auto ${tags.includes(tag) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label>Required Mod(s) (Optional)</Label>
                  <div className="flex flex-wrap gap-2">
                    {predefinedMods.map(mod => (
                      <Button
                        key={mod}
                        type="button"
                        onClick={() => handleModToggle(mod)}
                        className={`text-xs px-2 py-1 h-auto ${requiredMods.includes(mod) ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      >
                        {mod}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="level-file">Level File <span className="text-red-500">*</span></Label>
                  <Input
                    id="level-file"
                    type="file"
                    accept=".bld, .ebpl"
                    onChange={handleLevelFileChange}
                    required
                  />
                  {fileName && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected file: <span className="font-semibold">{fileName}</span>
                    </p>
                  )}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="screenshots">Screenshots (Optional)</Label>
                  <Input
                    id="screenshots"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleScreenshotChange}
                    multiple
                  />
                  {screenshots.length > 0 && (
                    <p className="text-sm text-gray-500 mt-2">
                      Selected screenshots: <span className="font-semibold">{screenshots.length} file(s)</span>
                    </p>
                  )}
                </div>
              </div>
              <Button type="submit" disabled={isUploading} className="w-full">
                {isUploading ? (
                  <span className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </span>
                ) : (
                  'Upload Level'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Search and Filters Section */}
        <Card className="bg-white shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Search & Filters</CardTitle>
            <CardDescription>
              Find the perfect level by searching for keywords or filtering by criteria.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Search for level name, author, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Select
                value={selectedDifficultyFilter}
                onValueChange={setSelectedDifficultyFilter}
                placeholder="Filter by Difficulty..."
              >
                <SelectTrigger />
                <SelectContent>
                  <SelectItem value="">All Difficulties</SelectItem>
                  {difficulties.map(d => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={selectedEditorFilter}
                onValueChange={setSelectedEditorFilter}
                placeholder="Filter by Editor..."
              >
                <SelectTrigger />
                <SelectContent>
                  <SelectItem value="">All Editors</SelectItem>
                  {editorTypes.map(e => (
                    <SelectItem key={e} value={e}>{e}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={sortBy}
                onValueChange={setSortBy}
                placeholder="Sort by..."
              >
                <SelectTrigger />
                <SelectContent>
                  <SelectItem value="date-uploaded">Date Uploaded</SelectItem>
                  <SelectItem value="most-downloads">Most Downloads</SelectItem>
                  <SelectItem value="least-downloads">Least Downloads</SelectItem>
                  <SelectItem value="most-liked">Most Liked</SelectItem>
                  <SelectItem value="least-liked">Least Liked</SelectItem>
                  <SelectItem value="name-az">Name (A-Z)</SelectItem>
                  <SelectItem value="name-za">Name (Z-A)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* New favorites checkbox */}
            <div className="flex items-center space-x-2">
              <input
                id="show-favorites"
                type="checkbox"
                checked={showFavoritesOnly}
                onChange={(e) => setShowFavoritesOnly(e.target.checked)}
                className="h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <Label htmlFor="show-favorites">
                Show only my favorites
              </Label>
            </div>
            
            <div className="flex flex-col space-y-2">
              <Label>Filter by Tags</Label>
              <div className="flex flex-wrap gap-2">
                {predefinedTags.map(tag => (
                  <Button
                    key={tag}
                    onClick={() => handleFilterTagToggle(tag)}
                    className={`text-xs px-2 py-1 h-auto ${selectedTagFilters.includes(tag) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Label>Filter by Required Mod(s)</Label>
              <div className="flex flex-wrap gap-2">
                {predefinedMods.map(mod => (
                  <Button
                    key={mod}
                    onClick={() => handleFilterModToggle(mod)}
                    className={`text-xs px-2 py-1 h-auto ${selectedModFilters.includes(mod) ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {mod}
                  </Button>
                ))}
              </div>
            </div>
            <Button onClick={handleResetFilters} className="w-full bg-gray-500 hover:bg-gray-600">
              Reset Filters
            </Button>
          </CardContent>
        </Card>

        {/* Featured Levels Section */}
        {featuredLevels.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Levels</h2>
            <p className="text-sm text-gray-600 -mt-2">
                The top 3 most downloaded levels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredLevels.map((level) => {
                const isFavorited = favoritedLevelIds.includes(level.id);
                const userVote = likedLevelIds[level.id];
                return (
                  <Card key={level.id} className="relative bg-white shadow-lg rounded-2xl flex flex-col justify-between border-2 border-yellow-400">
                    <CardHeader>
                      <CardTitle className="text-xl font-extrabold flex items-center">
                          <span role="img" aria-label="star" className="mr-2 text-2xl">⭐</span> {level.name}
                      </CardTitle>
                      <CardDescription>{level.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                      {level.screenshots && level.screenshots.length > 0 && (
                        <div className="flex gap-2 overflow-x-auto p-1 border rounded-md mb-2">
                          {level.screenshots.map((screenshot, index) => (
                            <img
                              key={index}
                              src={screenshot}
                              alt={`Screenshot ${index + 1} for ${level.name}`}
                              className="w-40 h-auto rounded-md shadow-sm object-cover"
                            />
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Author:</span> {level.author || 'Anonymous'}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Difficulty:</span> {level.difficulty}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Editor Type:</span> {getEditorType(level.fileName)}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Downloads:</span> {level.downloadCount || 0}
                      </p>
                      {level.tags && level.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="font-semibold text-sm">Tags:</span>
                          {level.tags.map(tag => (
                            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {level.requiredMods && level.requiredMods.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="font-semibold text-sm">Required Mods:</span>
                          {level.requiredMods.map(mod => (
                            <span key={mod} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {mod}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      <div className="flex w-full gap-2 items-center">
                        <Button
                          onClick={() => handleFavoriteToggle(level.id)}
                          className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-auto h-auto ${
                            isFavorited
                              ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                          aria-label={isFavorited ? 'Unfavorite this level' : 'Favorite this level'}
                        >
                          {isFavorited ? <Star size={20} fill="currentColor" /> : <StarOff size={20} />}
                        </Button>
                        <div className="flex-1 flex gap-2 justify-center">
                          <Button
                            onClick={() => handleVote(level.id, 'like')}
                            className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-auto h-auto ${
                              userVote === 1
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            <ThumbsUp size={16} />
                            <span className="ml-1">{level.likes || 0}</span>
                          </Button>
                          <Button
                            onClick={() => handleVote(level.id, 'dislike')}
                            className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-auto h-auto ${
                              userVote === -1
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            <ThumbsDown size={16} />
                            <span className="ml-1">{level.dislikes || 0}</span>
                          </Button>
                        </div>
                      </div>
                      <Button onClick={() => handleDownload(level)} className="w-full bg-blue-500 hover:bg-blue-600">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                      {level.uploadedBy === userId && (
                        <div className="flex w-full gap-2 mt-2">
                          {level.changelog && level.changelog.length > 0 && (
                            <Button onClick={() => openChangelogDialog(level)} className="w-full bg-gray-700 text-white hover:bg-gray-800">
                              View Changelog
                            </Button>
                          )}
                          <Button onClick={() => handleUpdateClick(level)} className="w-full bg-green-500 hover:bg-green-600">
                            Update File
                          </Button>
                          <Button onClick={() => handleDeleteClick(level.id)} className="w-full bg-red-500 hover:bg-red-600">
                            Delete
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Levels Display Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Community Levels</h2>
            <div className="flex gap-2">
              <Button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                aria-label="Grid View"
              >
                {gridIcon}
              </Button>
              <Button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                aria-label="List View"
              >
                {listIcon}
              </Button>
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
            </div>
          ) : displayedLevels.length > 0 ? (
            <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {displayedLevels.map((level) => {
                const isFavorited = favoritedLevelIds.includes(level.id);
                const userVote = likedLevelIds[level.id];
                return (
                  <Card key={level.id} className="relative bg-white shadow-lg rounded-2xl flex flex-col justify-between">
                    <CardHeader>
                      <CardTitle>{level.name}</CardTitle>
                      <CardDescription>{level.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                      {level.screenshots && level.screenshots.length > 0 && (
                        <div className="flex gap-2 overflow-x-auto p-1 border rounded-md mb-2">
                          {level.screenshots.map((screenshot, index) => (
                            <img
                              key={index}
                              src={screenshot}
                              alt={`Screenshot ${index + 1} for ${level.name}`}
                              className="w-40 h-auto rounded-md shadow-sm object-cover"
                            />
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Author:</span> {level.author || 'Anonymous'}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Difficulty:</span> {level.difficulty}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Editor Type:</span> {getEditorType(level.fileName)}
                      </p>
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Downloads:</span> {level.downloadCount || 0}
                      </p>
                      {level.tags && level.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="font-semibold text-sm">Tags:</span>
                          {level.tags.map(tag => (
                            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {level.requiredMods && level.requiredMods.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          <span className="font-semibold text-sm">Required Mods:</span>
                          {level.requiredMods.map(mod => (
                            <span key={mod} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {mod}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      <div className="flex w-full gap-2 items-center">
                        <Button
                          onClick={() => handleFavoriteToggle(level.id)}
                          className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-auto h-auto ${
                            isFavorited
                              ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                          aria-label={isFavorited ? 'Unfavorite this level' : 'Favorite this level'}
                        >
                          {isFavorited ? <Star size={20} fill="currentColor" /> : <StarOff size={20} />}
                        </Button>
                        <div className="flex-1 flex gap-2 justify-center">
                          <Button
                            onClick={() => handleVote(level.id, 'like')}
                            className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-auto h-auto ${
                              userVote === 1
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            <ThumbsUp size={16} />
                            <span className="ml-1">{level.likes || 0}</span>
                          </Button>
                          <Button
                            onClick={() => handleVote(level.id, 'dislike')}
                            className={`p-2 rounded-full transition-colors duration-200 flex items-center justify-center w-auto h-auto ${
                              userVote === -1
                                ? 'bg-red-500 text-white hover:bg-red-600'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            <ThumbsDown size={16} />
                            <span className="ml-1">{level.dislikes || 0}</span>
                          </Button>
                        </div>
                      </div>
                      <Button onClick={() => handleDownload(level)} className="w-full bg-blue-500 hover:bg-blue-600">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                      {level.uploadedBy === userId && (
                        <div className="flex w-full gap-2 mt-2">
                          {level.changelog && level.changelog.length > 0 && (
                            <Button onClick={() => openChangelogDialog(level)} className="w-full bg-gray-700 text-white hover:bg-gray-800">
                              View Changelog
                            </Button>
                          )}
                          <Button onClick={() => handleUpdateClick(level)} className="w-full bg-green-500 hover:bg-green-600">
                            Update File
                          </Button>
                          <Button onClick={() => handleDeleteClick(level.id)} className="w-full bg-red-500 hover:bg-red-600">
                            Delete
                          </Button>
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center p-8 text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
              <p>No levels match your current search and filter criteria. Try adjusting your selections.</p>
            </div>
          )}
        </div>
      </div>
      <footer className="mt-8 py-4 text-center text-sm text-gray-500 border-t border-gray-200">
        <div>
          © 2025 GrandGames/SoulSandMan
        </div>
      </footer>
    </div>
  );
};

export default App;
