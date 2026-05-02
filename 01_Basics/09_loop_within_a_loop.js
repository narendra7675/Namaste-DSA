let n = 3;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}

//output:
// ((i = 0), (j = 0));
// ((i = 0), (j = 1));
// ((i = 0), (j = 2));
// ((i = 1), (j = 0));
// ((i = 1), (j = 1));
// ((i = 1), (j = 2));
// ((i = 2), (j = 0));
// ((i = 2), (j = 1));
// ((i = 2), (j = 2));

console.log("-------------");

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}

//output:
// ((i = 1), (j = 0));
// ((i = 2), (j = 0));
// ((i = 2), (j = 1));

console.log("-------------");

for (let i=0; i<n;i++){
    for(let j=i; j>0; j--){
        console.log("i=" + i + ", j=" + j);
    }
}

//output:
// ((i = 1), (j = 1));
// ((i = 2), (j = 2));
// ((i = 2), (j = 1));
