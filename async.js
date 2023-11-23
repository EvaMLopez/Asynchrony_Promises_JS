const fetchTitles = async () => {
    const response = await fetch('./archive.json');
    const data = await response.json();
    console.log(data);
}
fetchTitles();

