import {motion} from "framer-motion"

function SlideDown({children ,style}:{children:React.ReactNode , style:string}) {
  return (
    <motion.div
      className={`${style}`}
      initial={{ y: "100%",opacity:0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.3 ,ease:"circIn"}}
    >
      {children}
    </motion.div>
  )
}

export default SlideDown
