// Error Boundary & file upload progress
// Error Boundary:its a special class component that catches renderig errors in its child component tree and shows a fallback UI 
// // Error Boundary:doesn't catch  errors inside event handlers  errors inside  setTimeout/setInterval error inside async code etc
// it is is used only for rendering and lifecycle methods errors

import React,{  useState,useEffect,useRef } from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
    
    this.state={
        hasError:false,
        errorMessage:"",
    };
}
//life cycle method updates when a child throws an error during rendering 
static getDerivedStateFromError(error){
    return{
        hasError:true,
        errorMessage:error.message || "Something went wrong",
    };
}
ComponentDidCatch(error,errorinfo){
    console.error("Error caught by Error Boundary:",error,errorinfo);


}
render(){
    if(this.state.hasError){
        return(
            <section>
                <h2>Something went wrong.</h2>
                <p>{this.state.errorMessage}</p>
           </section>
        );
    }
    return this.props.children;
}
}
function UploadComponent(){
    const [progress,setProgress]=useState(0);
    const [isLoading,setIsLoading]=useState(false);

    const intervalRef=useRef(null);
   
    useEffect(()=>{
        return()=>{
            clearInterval(intervalRef.current);
        }
    },[]);

    function startUpload(){
        if(isLoading) { //if upload is already then do nothing 
            return;
        }
        setProgress(0);
        setIsLoading(true);

        intervalRef.current=setInterval(()=>{
            setProgress((prevProgress)=>{
                const nextProgress=prevProgress+10;
                if (nextProgress>=100){
                    clearInterval(intervalRef.current);  
                    setIsLoading(false);
                    return 100;
                }
                return nextProgress;
            });
        },300);
    }
    function resetUpload(){
        clearInterval(intervalRef.current);
        setProgress(0);
        setIsLoading(false);
    }
    return(
        <section>
            <h2>File Upload & error Boundaries</h2>
            <button onClick={startUpload}disabled={isLoading}>{isLoading?"Uploading...":"Upload File"}</button>
            <button onClick={resetUpload}disabled={isLoading && progress===0}>Reset</button>
            <progress value={progress} max="100"></progress>
            <p>{progress}% complete</p>
            {progress===100 && <p>Upload complete.</p>}
        </section>
    );
}
export function UploadErrorBoundary(){
    return(
        <ErrorBoundary>
            <UploadComponent />
        </ErrorBoundary>
    );
}

