

const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = (id) => {
    const storedDonation = getStoredDonation();
    const alreadyIn = storedDonation.find(donation => donation === parseInt(id));
    if (!alreadyIn) {
        storedDonation.push(parseInt(id));
        localStorage.setItem('donation', JSON.stringify(storedDonation));
    }
}

export { getStoredDonation, saveDonation };