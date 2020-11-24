import myRequest from './getData.js'

class myPlan {
    constructor(){
        this.getData = new myRequest();
    }

    getStation(){
        const Request = this.getData.getData({
            url:'http://testweb.xaltserver.com/api/positioning_device/get_project_station_user/default',
            type:'post',
            data:{
                project_id: 201101022
            }
        });

        Request.then(
            data=>{
                console.log(data)

            },
        )
    }
}

let plan = new myPlan();
plan.getStation()