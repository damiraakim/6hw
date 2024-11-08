const arr=['string-3', 'string-5', 'string-2', 'string-6', 'string-4', 'string-1']
for (let i=0; i<arr.length; i++){
    console.log(document.getElementById(arr[i]).textContent);
}