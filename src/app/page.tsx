import React from 'react'

const page = () => {
  return(
     <div><figure className="md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg ">
     <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/o.png" alt="" width="384" height="512"/>
     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
       <blockquote>
         <p className="text-lg font-medium">
           “HELLO! Umaima Wali here, Currently I am working as UIUX designer + Graphic designer at high Level solution. I have worked with 100+ international companies helped them designing their brand (from logos to website, funnels, social media, lead magnets, Ebooks, etc) according to their specific needs and choices and earned their satisfaction (Alhumdulilah).”
         </p>
       </blockquote>
       <figcaption className="font-large">
         <div className="text-sky-400 dark:text-sky-400">
           Umaima Wali
         </div>
         <div className="text-slate-700 dark:text-slate-500">
           Graphic Designer, High Level Solution
         </div>
       </figcaption>
     </div>
   </figure></div>
  )
}

export default page