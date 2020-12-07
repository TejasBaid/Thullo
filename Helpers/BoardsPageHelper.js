import sample1 from "../Assets/samples/sample1.jpg";


export const addBoard = (setFunction) => {
    const newBoard = {
        boardName:'DevChallenges(2)',
        backgroundImage:sample1,
    }
    return setFunction((boards) => [...boards,newBoard]);


}