export function random(max) {
    // returns a random number between 0 and max (inclusive)
    return Math.floor(Math.random() * (max))
}

export function newTeamsData() {
    const teamsData = [
        {teamName: 'Baltimore Ravens'},
        {teamName: 'Arizona Cardinals'},
        {teamName: 'Atlanta Falcons'},
        {teamName: 'Buffalo Bills'},
        {teamName: 'Carolina Panthers'},
        {teamName: 'Cincinnati Bengals'},
        {teamName: 'Chicago Bears'},
        {teamName: 'Cleveland Browns'},
        {teamName: 'Dallas Cowboys'},
        {teamName: 'Denver Broncos'},
        {teamName: 'Detroit Lions'},
        {teamName: 'Houston Texans'},
        {teamName: 'Green Bay Packers'},
        {teamName: 'Indianapolis Colts'},
        {teamName: 'Los Angeles Rams'},
        {teamName: 'Jacksonville Jaguars'},
        {teamName: 'Minnesota Vikings'},
        {teamName: 'Kansas City Chiefs'},
        {teamName: 'New Orleans Saints'},
        {teamName: 'Las Vegas Raiders'},
        {teamName: 'New York Giants'},
        {teamName: 'Los Angeles Chargers'},
        {teamName: 'Philadelphia Eagles'},
        {teamName: 'Miami Dolphins'},
        {teamName: 'San Francisco 49ers'},
        {teamName: 'New England Patriots'},
        {teamName: 'Seattle Seahawks'},
        {teamName: 'New York Jets'},
        {teamName: 'Tampa Bay Buccaneers'},
        {teamName: 'Pittsburgh Steelers'},
        {teamName: 'Washington Commanders'},
        {teamName: 'Tennessee Titans'}
    ]
    teamsData.forEach((team) => {
        team.clicked = false;
        });
    return teamsData;
}

export function getRandomTeams(unselectedTeams, count) {
    let randomTeams = [];
    for (let i=0; i<count; i++) {
        let randomNum = random(unselectedTeams.length);
        let randomTeam = unselectedTeams[randomNum]; 
        randomTeams.push(randomTeam);   
        unselectedTeams.splice(randomNum, 1); 
    }
    return randomTeams;
}

