
function removeTags(str)
 {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
    
    return str.replace( /(<([^>]+)>)/g, '');
}
document.write(removeTags('<p><strong><em>SkillSanta Assignments</em></strong></p>'));;

//test cases:
//<body> <p> my name is shrey ruhela </p> </body> 
//<body <p> vaccination </p> </body> 