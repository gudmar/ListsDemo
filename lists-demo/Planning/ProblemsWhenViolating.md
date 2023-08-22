* In ChartContent: always casting item to 'as iPicturesData'
This smells like Liskov subtype substitude principle violation
* When lift state up: does not parent know too much? Perhaps context or useImperativeHandle is a fix?
* ATTEMPT to encapsulate list and have its state in parent for
saving purposes: violation of single state source. Can this be translated as 'single responsibility violation?' 2 different 
places in the code may want the same state to change for different reasons. State may 'split'
* List knows how to fetch data and about each possible
data type it can handle, data should be from above component.
Adding new type === modification of List, so its also OpenClosePrinciple violation
* Not putting functions / components to separate files: some modules 'know' too much
* Styling: themes. Css is a very low level implementation detail. Some dependencies need to
stay (class names), but maikinng some styling injectable (DIP) makes it easy to change themes of web page   `
* SIngle respinsibility: double state source. In such case 2 sources may have state that will be different, and the same state may be changed for different reasons
        - Always when child encapsulated and parent wants to konw it's state 
        (here a list gets its own state, but PARENT saves it, not knowint it's state, 
        state is doubled. LIst fetches the data so it should handle save on its own)
        - If you write something on FE and you want to make some code independant from
        REACT. you may write classes in functional react, and keep state in those classes, but to present it, you have to double the state.
        Example: Brick game. State should be kept in react, and provided to a function that recalclates it (in useReducer). Then functions knowing how to recalculate state are 'separated' somehow from react
        - Real problem is when there is an attempt to change the same state from 2 different places. In case there is a use case for 'dobuled' state, there should be only ONE source, where the state is modified, and the second source should be 
        only a copy. However in most cases state should be keept ONLY in a single place
* If list downloads data, why it does not save?
Why parent has to save? Because data has to be in the same format, parent will have to save each list separately anyway

* Merging whole state is violation of index segregation principle. If nots, doDos, pictures are not related, their states should be managed and stored separetely.
        - Too big state is complexed, and error prone. Too many possible dependencies,that may be messed up,
        - Difficulty to add new list (meging into existing state is against open/close)
        - Removing some list / state part difficult
        - Each list knows about things it does not need

* OneOfListsData type should look suspicious, as it is a union of NoteData | ToDoData | PicturesData, and this may indicate interface segregation problem.
Union is good for generic functions like getStateWithModifiedProp that switches a
element in a list of elements  to create a new state. This is good, as this function
never looks inside processed data. It does not care what type of data is stored in
elements of lists it handles


====================

After cleaning:

* When defining type of the 'list' items. Should it be 'Any'? Otherwise when adding new type, means editing some type file, and probably a lot of other files
* Types in TS: should considere changes here, as change to one type causes changes to lot of types
* Break huge state into separate reducers
* NotesItemWithAddButton is perfect example for OpenClosePrinciple,
as this is NotesItem extended, not withSearchableList modified with switch conditions



