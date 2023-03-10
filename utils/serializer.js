

/**
 * Generic function for finding children
 */
const searchChildren = (nodeId, nodesArr) => {
  /**
   * @param {number} nodeId - parent nodeId
   * @param {nodesArr} - array with all nodes
   * @returns {Array} with children property wich have inner children
   */

  // we are receiving array of all children with parentId the same as parent nodeId
  // but this array is not filtered by siblings
  const arrOfUnfilteredChildren = nodesArr.filter(
    (node) => node.parent === nodeId
  );

  if (!arrOfUnfilteredChildren.length) {
    // if there is no children we return empty length
    return [];
  }

  if (arrOfUnfilteredChildren.length) {
    return arrOfUnfilteredChildren.map((node) => {
      // recursion
      // runs the same function with chil nodeId to get to know his children and right it down in his property children
      node.children = searchChildren(node.id, nodesArr);
      node.label = node.title
      return node;
    });
  }
};

export const serializeNode = (nodesArr) => {

  const resultArr = [];

  // Filtering initial array to have an array only of root nodes with parentId === null
  const rootArr = nodesArr.filter((node) => {
    if (node.parent === null) {
      // searching for a children and right it into new property children
      node.children = searchChildren(node.id, nodesArr);
      node.label = node.title
      return true;
    }
  });

  return rootArr;
};
