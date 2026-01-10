function parents()
{
    console.log("Iam from parent function"+child());
    
    function child()
    {
        console.log("iam from child function");
        return "hi";
       

    }
}
parents();

