
import React  from "react";
// import {Outlet} 
// import C
export default function Layout(){
    return (
        <>
         <Header>

         </Header>

         <main className ="max-w-screen-xl-auto">
            <Outlet />
         </main>
        </>
    );

}