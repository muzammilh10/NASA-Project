const launches =  new Map();
let latestFlightNumber = 100;

const launch = {
    flightnumber:100,
    mission:`Kepler Exploration X`,
    rocket:`explorer 151`,
    launchDate:new Date(`December 27,2030`),
    target:`kepler-442 b`,
    customer: [`ZIM`,`NASA`],
    upcoming: true,
    success:true,
}

launches.set(launch.flightnumber,launch);

function existLaunchWithId(launchId){
    return launches.has(launchId);
}

function getAllLaunches(){
    return Array.from(launches.values());
}

function addNewLaunch(launch){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch,{
            success:true,
            upcoming:true,
            customer : [`Zero to Mastery`,`NASA`],
            flightnumber:latestFlightNumber,
        })
    )
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success=false;
    return aborted;
}


module.exports = {
    existLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
}