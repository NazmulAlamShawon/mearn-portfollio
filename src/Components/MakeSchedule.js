import React from 'react'
import tech from '../../src/images/images/codes.png'



const MakeSchedule = () => {
    return (
       <section className=' flex'>
         <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={tech} class="max-w-sm rounded-lg shadow-2xl h-3/5" alt='tech' />
    <div>
      <h1 class="text-5xl font-bold">Join Our Services</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

       </section>
        
       
    );
};

export default MakeSchedule;