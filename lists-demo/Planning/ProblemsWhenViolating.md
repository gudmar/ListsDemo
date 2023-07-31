* In ChartContent: always casting item to 'as iPicturesData'
* When lift state up: does not parent know too much? Perhaps context or useImperativeHandle is a fix?
* ATTEMPT to encapsulate list and have its state in parent for
saving purposes: violation of single state source. Can this be translated as 'single responsibility violation?' 2 different 
places in the code may want the same state to change for different reasons. State may 'split'
* Not putting functions / components to separate files: some modules 'know' too much