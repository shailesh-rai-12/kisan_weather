export default function(){

    this.direction=function(degree)
    {
        var dir;
        if(degree >=330 || degree <30){
                dir='North';
        }else if(degree >= 30 && degree < 60){
            dir='North-East';
        }else if(degree >=60 && degree < 120){
            dir='East';
        }else if(degree >=120 && degree < 150){
            dir='South-East';
        }else if(degree >=150 && degree < 210){
            dir='South';
        }else if(degree >=210 && degree < 240){
            dir='South-West';
        }else if(degree >=240 && degree < 300){
            dir='West';
        }else if(degree >=300 && degree < 330){
            dir='North-West';
        }

        return dir;
    }
}