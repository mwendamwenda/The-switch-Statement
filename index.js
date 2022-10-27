// console.log('The-switch-Statement');

const day = 'monday';

switch(day){
    case 'monday':// this is like saying that day === monday
        console.log('plan my week');
        console.log('javascript meet up');
        break;
        case 'tuesday' :
            console.log('meet my tailor');
            break;
        case 'wensday' : 
        console.log('meet kurunzi ambassodors');
        break;
        
        case 'thursday' :
            console.log('meet kurunzi embassy rep');
            break;
         case 'friday' :
            console.log('visit mama sharon ');
            break;
         case 'satoo':
         case 'sunday':
            console.log('enjoy the weekend');
            break;
            default :
            console.log('not a valid day!');        
}

//we can write this using if and else if


if(day === 'monday'){
    console.log('plan my week');

        console.log('javascript meet up');

}else if(day === 'tuesday'){

    console.log('meet my tailor');

}else if(day === 'wensday'){

    console.log('meet kurunzi ambassodors');

}else if(day === "thursday"){

    console.log('go to swimming')
}else if(day === 'friday'){

    console.log('visit mama sharon ');

}else if(day === 'satoo' || 'sunday'){

    console.log('enjoy the weekend');

}else{

    console.log('not a valid number');
}