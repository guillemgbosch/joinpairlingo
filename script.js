// script.js

class PartnerSearch {
    constructor(partners) {
        this.partners = partners || [];
    }

    // Function to find partners based on criteria
    findPartners(criteria) {
        return this.partners.filter(partner => 
            this.meetsCriteria(partner, criteria)
        );
    }

    // Define the criteria for matching
    meetsCriteria(partner, criteria) {
        for (let key in criteria) {
            if (criteria.hasOwnProperty(key) && partner[key] !== criteria[key]) {
                return false;
            }
        }
        return true;
    }
    
    // Example function to add a new partner
    addPartner(partner) {
        this.partners.push(partner);
    }
}

// Usage example
const partners = [
    { name: 'Alice', skill: 'JavaScript' },
    { name: 'Bob', skill: 'Python' },
    { name: 'Charlie', skill: 'JavaScript' }
];

const searchEngine = new PartnerSearch(partners);
const criteria = { skill: 'JavaScript' };
const foundPartners = searchEngine.findPartners(criteria);

console.log('Found Partners:', foundPartners);
