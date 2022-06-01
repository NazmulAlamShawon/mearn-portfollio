import React from 'react';
import code from '../../images/images/code-quality-standard.webp'


const Baner = () => {
    return (
       
            <div class="hero min-h-screen  my-30">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={code} class="max-w-sm rounded-lg shadow-2xl" alt='code'/>
                    <div>

                        <h2 class="text-5xl font-bold mb-3">Nazmul Alam</h2>
                        <h2 class="text-3xl font-bold ">Junior Front End Developer</h2>

                        <p class="py-7 m-3">My Name is Nazmul Alam. I am junior front end developer. I love coding because it's my passion.I have a lot of skill  </p>
                         <div className="arrow flex">
                            
                        


                        <label for="my-modal-6" class="btn modal-button bg-gradient-to-r from-cyan-500 to-blue-500">Get Hire Me</label>


                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle ">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">Send me message for hiring </h3>
                                <textarea class="textarea textarea-secondary mt-3" placeholder="Send me message"></textarea>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn bg-gradient-to-r from-cyan-500 to-blue-500">Submit</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;