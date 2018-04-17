const team = {
    members: ['Jane', 'Bill'],
    teamName: 'Super Squad',
    teamSummary:function() {
        return this.members;
    } 
    
};

console.log(team.teamSummary());