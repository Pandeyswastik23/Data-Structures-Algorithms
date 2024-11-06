function ContainerWithMostWater(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      let area = Math.min(heights[i], heights[j]) * (j - i);
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
}

//console.log(ContainerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Optimized:

function ContainerWithMostWaterOptimized(height) {
  let left_ptr = 0;
  let right_ptr = height.length - 1;
  let maxArea = 0;

  while (left_ptr < right_ptr) {
    let area =
      Math.min(height[left_ptr], height[right_ptr]) * (right_ptr - left_ptr);
    maxArea = Math.max(maxArea, area);

    if (height[right_ptr] > height[left_ptr]) {
      left_ptr++;
    } else {
      right_ptr--;
    }
  }
  return maxArea;
}

console.log(ContainerWithMostWaterOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7]));
