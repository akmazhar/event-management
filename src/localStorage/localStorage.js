const getData = () =>{
    const corporateData = localStorage.getItem('corporate');
    if(corporateData){
        return JSON.parse(corporateData)
    }
    return [];
}

const setData = (id) => {
    const corporateData = getData();
    const isExist = corporateData.find(oneDonate => oneDonate.id === id);
    if(!isExist){
        corporateData.push(id);
        localStorage.setItem('corporate', JSON.stringify(corporateData))
    }
};
export {getData, setData}