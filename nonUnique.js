/* 
  1: Non-unique Elements
	You are given a non-empty list of integers (X). For this task, you should return a list consisting of only the non-unique elements in this list. To do so you will need to remove all unique elements (elements which are contained in a given list only once). When solving this task, do not change the order of the list. Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3]. 

	Example:
	nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
*/

export const nonUniqueElements = data => {
    let result = data.reduce((acc, val, index, arr) => {
        let temp = arr.slice();
        temp.splice(index, 1);
        if (temp.indexOf(val) > -1) acc.push(val);

        return acc;
    }, []);

    return result;
};

// nonUniqueElements([1, 2, 3, 1, 3]);
