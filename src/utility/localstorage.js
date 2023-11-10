
const getStoredDonateApplication = () =>{
    const storedDonateApplication = localStorage.getItem('donate-applications');
    if(storedDonateApplication){
        return JSON.parse(storedDonateApplication);
    }
    return [];
}

const saveDonateApplication = id=>{
    const storedDonateApplications = getStoredDonateApplication();
    const exist = storedDonateApplications.find(donateId => donateId === id);
    if(!exist){
        storedDonateApplications.push(id);
        localStorage.setItem('donate-applications', JSON.stringify(storedDonateApplications))
    }
}

export {getStoredDonateApplication,saveDonateApplication}