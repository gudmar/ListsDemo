# ListsDemo

**This is a demo app that's code will be used in a speech about SOLID principles in React**

## About SOLID:##

You must heard about clean code. Function ought do one thing, should be short. You should not repeat yourself (reusable code)...
Probably you heard about design patterns described in book by GOF.
* If you follow SOLID principles, your code will be clean,
* The better you understand design patterns, the easier it will be to follow SOLID principles.

SOLID principles is a set of 5 rules proposed by Robert C. Martin. They were originaly thought for languates like C#, JAVA, C++,
so:
* Object oriented languages,
* Static type checking and compilation of code,
* Applications that are compiled to many files.
If you write applications like this, you will not have many problems with understaning gain of SOLID usage.
However if you write application that will be compiled to a single file, and in lets say functional language, SOLID principles are still valid, but
they could benefit from a little translation.
This translation together with examples will be the point of my presentation

## SOLID are ##
1. Single responsibility:
   * Misunderstood,
   * Not about 'function doing a single thing'
   * About a single reason for change (this reason is a single person or a person role in enterprise that would like a function, module, class to be changed)
   * Example by Robert Martin about a piece of code used by both HR and acountance is good for explaining sense
   * A function from feature 'A' imported by feature 'B' violates this principle, as preson responsible for 'A' has right to change this function not infroming 'B' owner
   * DRY is valid ONLY if repeating functions will change for the same reason, else the same code should be repeated,
   * a "Functions" folder in root for *reusable* functions
   * Internal feature components should not be reused by other features, as they may change,
   * Agreed location for reusable components,
   * Components and functions that are reusable should not be changed (may be refactored, but have to be covered with tests)
  
2. Open close principle:
   * Code closed for modifications
   * Code closed for extentions
   * Example of a component with conditions. It knows if it serves  a 'to do' list or 'notes' list
   * Such component has to be changed when new use case arrives,
   * Changes may impect regression,
   * Components become big and tangled, no one wants to use them
   * Components start having a lot of props and their state grews
   * Ways to extend code: in React:
     * *Decorator* pattern: wrapping a function in callback
     * `children` property
     * HOC
    
3. Liskov subtype substitude principle
   * Example by Robert Martin with rectangle is genious, but perhaps some else would work,
   * A laptop for a writer example
   * How to find a distinguished example in code? Violation of this is often violation of some else principles
   * Component getting not used props
   * Component that has not all props set by parent,
   * Function checing if some args passed to it are undefined
   * May cause hard to debug bugs and code that is difficult to read
   * Do not 'extend', rather implement interfaces. This will check in TS if all passed args are properly used
  
4. Interface segregation principle
   * Do not depend on not needed things,
   * Dependencies in big, not monolit applications may cause compilation dependencies,
   * Compilation of an application that is 10GB big every single change is not possible,
   * In JS we don't compile, but we want whole code to be in a single file,
   * in REACT, TS we compile to a single file,
   * Still unwanted dependencies cause problems
   * Testing a synchronous function from module that has some async function in it made tests depend on a library that was simulating async operation,
   * In unit tests, depending on too many functions makes it diffucult to understand where some bug is situated, not needed functions should be mocked,
   * Don't depend on APIs, DBs in tests,
   * Too big `utils.js` files,
   * Each feature should have it's own utility file, so changes will not influence other features,
   * Some code in modules may be execued if only module is imported, causing state of applicatoin to change,
   * RxJS is a good example. It has a tone of functions. Importing all of them could las a while, so that is why it is diveided in multiple downloadable files,
   * Type script definintions are another example of a huge library
  
5. DIP: dependency inversion principle:
   * In C#-like-langulages done with interfaces, makes components, that are independently developed, switchable files, no need to recomplie whole application when switching such a component,
   * Interfaces in TS may be used in a similar way. You define an interface, and it is known that some funciton will get an object implementing this interface
   * Sticking to this rule makes code more reusable,
   * A `map` function or `filter` function are a good example, as they take a function as an argument, no need to implement multiple functions, thanks to this,
   * `children` property in components: parent component does not know too much about things it should not care about,
   * HOC
   * Application logic should not konw about DB, DB should be separated (facade pattern) from application logic,
   * Not wollowing this rule will make in not possible to change DB, or for instance implement feature related to undoing DB delete operation,
