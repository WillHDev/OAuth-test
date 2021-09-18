
const ResourceList = ({ resources }) => {

    return (
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
  
            <section className="section">
              <div className="columns is-multiline is-variable is-8">
                {
                resources.map( resource => 
                  <div key={resource.id} className="column is-5 is-offset-1">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">{resource.createdAt}</h2>
                    <h1 className="title has-text-black is-3">{resource.title}</h1>
                    <p className="has-text-dark">{resource.description}</p>
                  </div>
                </div>
              
                  )
                
                }
              </div>
            </section>
          </div>
        </div>
      </section>
    )
  }
  
  export default ResourceList;
  
  
  
  
  // const ResourceList = (params) => {
      
  
  //     return (
  //         <section classNameName="hero ">
  //         <div classNameName="hero-body">
  //           <div classNameName="container">
    
  //             <section classNameName="section">
  //               <div classNameName="columns is-variable is-8">
  //                 <div classNameName="column is-5 is-offset-1 ">
  //                   <div classNameName="content is-medium">
  //                     <h2 classNameName="subtitle is-5 has-text-grey">December 23, 2018</h2>
  //                     <h1 classNameName="title has-text-black is-3">Custom 404 Pages</h1>
  //                     <p classNameName="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
  //                       /source/404.blade.php.
  //                       To preview the 404 page, you can visit /404 in your browser. Depending...</p>
  //                   </div>
  //                 </div>
  //                 <div classNameName="column is-5">
  //                   <div classNameName="content is-medium">
  //                     <h2 classNameName="subtitle is-5 has-text-grey">December 25, 2018</h2>
  //                     <h1 classNameName="title has-text-black is-3">Fuse Search</h1>
  //                     <p classNameName="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
  //                       pre-built Vue.js
  //                       component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </section>
    
  //             <div classNameName="is-divider"></div>
    
  //             <section classNameName="section">
  //               <div classNameName="columns is-variable is-8">
  //                 <div classNameName="column is-5 is-offset-1">
  //                   <div classNameName="content is-medium">
  //                     <h2 classNameName="subtitle is-5 has-text-grey">December 25, 2018</h2>
  //                     <h1 classNameName="title has-text-black is-3">Getting Started</h1>
  //                     <p classNameName="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
  //                       minimal
  //                       effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
  //                       configuration settings can be found in config</p>
  //                   </div>
  //                 </div>
  //                 <div classNameName="column is-5">
  //                   <div classNameName="content is-medium">
  //                     <h2 classNameName="subtitle is-5 has-text-grey">December 25, 2018</h2>
  //                     <h1 classNameName="title has-text-black is-3">Getting Started</h1>
  //                     <p classNameName="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
  //                       minimal
  //                       effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
  //                       configuration settings can be found in config</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </section>
    
    
  //           </div>
  //         </div>
  //       </section>
  //         // <section classNameNameName="section">
  //         // <div classNameNameName="columns">
  //         //   <div classNameNameName="column is-10 is-offset-1">
  //         //     <div classNameNameName="container has-text-centered is-fluid">
  //         //       <div classNameNameName="hero is-light">
  //         //         <div classNameNameName="hero-body">
  //         //           <h2 classNameNameName="title is-4">Sign up for our newsletter</h2>
  //         //             <div classNameNameName="column is-6 is-offset-3">
  //         //               <div classNameNameName="field has-addons has-addons-centered">
  //         //                 <div classNameNameName="control is-expanded">
  //         //                   <input classNameNameName="input " type="text" placeholder="Email address" />
  //         //                 </div>
  //         //                 <div classNameNameName="control">
  //         //                   <a classNameNameName="button is-info">
  //         //                     Subscribe
  //         //                   </a>
  //         //                 </div>
  //         //               </div>
  //         //             </div>
  //         //         </div>
  //         //       </div>
  //         //     </div>
  //         //   </div>
  //         // </div>
  //         // </section>
  //     )
  // }
  // export default ResourceList;