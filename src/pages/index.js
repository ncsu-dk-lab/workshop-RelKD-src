import * as React from "react"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Georgia, Times New Roman, Times, serif",
}

// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div className="bg-black h-16 text-white fixed w-full">
        <div className="max-w-screen-md max-w-screen-lg mx-auto px-5">
          <div className="h-16 flex flex-row flex-wrap content-center items-baseline">
            <div className="mr-5 font-bold">DCAA@2023</div>
            {/* <div className="mr-5 text-sm text-gray-300">
              <a href="#about">About</a>
            </div> */}
            <div className="hidden md:flex"><div className="mr-5 text-sm text-gray-300">
              <a href="#cfp">CFP</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#schedule">Schedule</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#speakers">Speakers</a>
            </div>
            <div className="mr-5 text-sm text-gray-300">
              <a href="#organizers">Organizers</a>
            </div></div>
            {/* <div className="mr-5 text-sm text-gray-300">
              <a href="#contact">Contact</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="pt-16">
        <div className="flex flex-row ">
          <div className="w-full" style={{
            "backgroundImage": 'url("https://aaai-23.aaai.org/wp-content/uploads/2022/12/AAAI-23-Website-Banner_2560x593-min.png")',
            "height": "50vh",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "center",
            "backgroundSize": "cover",
            "paddingTop": "22vh"
          }}>
          </div>
        </div>

        <div id="cfp" style={{"background":"#f5f5f5"}} className="pt-10">
          <div className="text-black text-4xl font-semibold text-center">
            The First Workshop on DL-Hardware Co-Design for AI Acceleration
          </div>
          <div className="text-black text-center mt-2">
            Colocated with the <a href="https://aaai.org/Conferences/AAAI-23/" className="underline">37th AAAI Conference on Artificial Intelligence</a>
          </div>

          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="mt-5 text-xl px-3 md:px-0 md:text-justify ">
              <div className="text-4xl">Accepted papers</div>
              <ul className="list-disc pl-5 mt-5 italic text-base">
                <li className="py-1">TinyM^2Net: A Flexible System Algorithm Co-designed Multimodal Learning Framework for Tiny Devices</li>
                <li className="py-1">Training Low-Rank CNNs with Orthogonality From Scratch</li>
                <li className="py-1">Self-Compressing Neural Networks</li>
                <li className="py-1">Hardware-Efficient Adaptive Token Pruning for Vision Transformers</li>
                <li className="py-1">Neurogenesis Dynamics-inspired Spiking Neural Network Training Acceleration</li>
                <li className="py-1">RRNet: Towards ReLU-Reduced Neural Network for Two-party Computation Based Private Inference</li>
                <li className="py-1">Unifying Data-Model Sparsity for Class-Imbalanced Graph Representation Learning</li>
                <li className="py-1">Shared Information-Based Safe And Efficient Behavior Planning For Connected Autonomous Vehicles</li>
                <li className="py-1">On-Mobile Real-Time Super-Resolution via Neural Architecture Search</li>
                <li className="py-1">All-in-One: A Highly Representative DNN Pruning Framework for Edge Devices with Dynamic Power Management</li>
                <li className="py-1">FP8-BERT: Post-Training Quantization for Transforme</li>
                <li className="py-1">Towards Sparse and Low-rank Neural Networks with Hybrid Compression</li>
              </ul>

              <div className="text-4xl mt-8">Call for Reviewers</div>
              <div className="mt-5 leading-8">We are looking for reviewers! If interested, please fill out this <a className="text-blue-600" href="https://docs.google.com/forms/d/1KaQCnRqRpTo4UXkSCLxNVAovrr0cnNFW8MutD482h9c/edit">form</a>. We will be selecting multiple Top Reviewer Awards.</div> 
              <div className="text-4xl mt-8">Call for Papers</div>
              <div className="mt-5 leading-8">As deep learning (DL) continues to permeate all areas of computing, algorithm engineers are increasingly relying on hardware system design solutions to improve the efficiency and performance of deep learning models. However, the vast majority of DL studies rarely consider limitations such as power/energy, memory footprint, and model size of real-world computing platforms, and even less consider the computational speed of hardware systems and their own computational characteristics. Addressing all of these metrics is critical if advances in DL are to be widely used on real device platforms and scenarios, especially those with high requirements for computational efficiencies, such as mobile devices and AR/VR. Therefore, it is desirable to design and optimize both the DL models and the hardware computing platforms. The workshop provides a great venue for the international research community to share mutual challenges and solutions between deep neural network learning and computing system platforms, with a focus on accelerating AI technologies on real system platforms through DL-hardware co-design.
              </div>
              <div className="mt-5">
                <ul className="list-disc pl-5">
                  <li className="py-1">Neural network pruning & quantization & distillation</li>
                  <li className="py-1">Deep learning acceleration for applications</li>
                  <li className="py-1">Hardware-aware network architecture search & design</li>
                  <li className="py-1">Applications of deep learning on mobile and AR/VR</li>
                  <li className="py-1">New theory and fundamentals of DL-hardware co-design</li>
                  <li className="py-1">Deep learning to improve computer architecture design</li>
                  <li className="py-1">Real-time and energy-efficient deep learning systems</li>
                  <li className="py-1">Hardware accelerators for deep learning</li>
                </ul>
              </div>
              <div className="mt-5 leading-8">
              The workshop will be a half-day meeting comprising several invited talks from distinguished researchers in the field, spotlight lightning talks and a poster session where contributing paper presenters can discuss their work, and a concluding panel discussion focusing on future directions. Attendance is open to all registered participants.
              </div>

              <div className="mt-5 leading-8">
              Submitted technical papers can be up to 4 pages long (excluding references and appendices). Position papers are welcome. All papers must be submitted in PDF format using the AAAI-23 author kit. Papers will be peer-reviewed and selected for spotlight and/or poster presentation.Submission site: 
              <div className="md:hidden"><a className="text-blue-600" href="https://cmt3.research.microsoft.com/DCAA2023/Submission/Index">click here</a></div>
              <div className="hidden md:block"><a className="text-blue-600" href="https://cmt3.research.microsoft.com/DCAA2023/Submission/Index">https://cmt3.research.microsoft.com/DCAA2023/Submission/Index</a></div>
              </div>

              <div className="text-3xl mt-5">Important Dates (GMT)</div>
              <div className="hidden md:block">
                <div className="mt-5 leading-8 flex">
                  <div className="flex-1">
                    <div>Paper Submission Deadline</div>
                    <div>Notification of Acceptance</div>
                    <div>Camera-Reday Deadline</div>
                    <div>Workshop Date</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-red-600">November 30, 2022</div>
                    <div>December, 2022</div>
                    <div>TBD</div>
                    <div>February 13, 2023</div>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div className="mt-5 leading-8 flex">
                  <div className="flex-1 text-xl">
                    <div>Paper Submission Deadline:</div>
                    <div className="text-base mb-3 text-red-600">November 30, 2022</div>
                    <div>Notification of Acceptance:</div>
                    <div className="text-base mb-3">December, 2022</div>
                    <div>Camera-Reday Deadline:</div>
                    <div className="text-base mb-3">TBD</div>
                    <div>Workshop Date:</div>
                    <div className="text-base mb-3">February 13, 2023</div>
                  </div>
                </div>
              </div>

              <div className="text-3xl mt-10">Eligible Works</div>
              <div className="mt-5 font-bold">This workshop is non-archival, and it will not have proceedings. We permit under-review or concurrent submissions. We will select Best Paper Awards.</div>

              {/* <div className="mt-5">Concretely, we ask members of the community to submit an abstract (250 words or fewer) describing the work and one or more of the following accompanying materials that describe the work in further detail. Higher quality accompanying materials improve the likelihood of acceptance and of spotlighting work with an oral presentation.</div> */}

              <ul className="list-disc pl-5 mt-5">
                <li className="py-1">A workshop paper of approximately four pages in length.</li>
                <li className="py-1">A position paper or survey paper with no page limit.</li>
                <li className="py-1">A poster presenting results of work-in-progress.</li>
                <li className="py-1">A published paper in the form that it was published.</li>
                <li className="py-1">A link to a blog post (e.g., distill.pub, Medium) describing results.</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="schedule" className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Agenda</div>
          <div className="mt-5">
            {/* <div>Rows highlighted in green are LIVE whereas rows highlighted in yellow are PRE-RECORDED. The poster session is distributed across multiple ZOOM.</div>  */}
          </div>
          <div className="overflow-scroll md:overflow-auto">
            <div className="mt-10" style={{width: "1000px"}}>
              <div className="flex border-b-2 pb-3">
                <div className="w-100">08:50am-09:00am</div>
                <div className="flex-1 text-center">Opening remarks</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">09:00am-09:30am</div>
                <div className="flex-1 text-center">
                  <div>Invited talk 1: <a className="text-blue-600" href="https://ece.duke.edu/faculty/yiran-chen">Yiran Chen</a></div>
                  <div className="mt-5 text-gray-600">Cross-Layer Optimization for AI with Algorithm-Hardware Co-design</div>
                </div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">09:30am-10:00am</div>
                <div className="flex-1 text-center">
                  <div>Invited talk 2: <a className="text-blue-600" href="https://coe.northeastern.edu/Research/rcl/members/MEL/index.html">Miriam Leeser</a></div>
                  <div className="mt-5 text-gray-600">Machine Learning on FPGAs in the Open Cloud Testbed</div>
                </div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">10:00am-10:30am</div>
                <div className="flex-1 text-center">Poster sessions + Coffee break</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">10:30am-11:00am</div>
                <div className="flex-1 text-center">
                  <div>Invited talk 3: <a className="text-blue-600" href="https://www.comp.nus.edu.sg/~youy/">Yang You</a></div>
                  <div className="mt-5 text-gray-600">Colossal-AI: A Unified Deep Learning System For Large-Scale Parallel Training</div> 
                </div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">11:00am-11:30am</div>
                <div className="flex-1 text-center">Best Paper Presentation</div>
                <div className="w-100">Livestream</div>
              </div>
            </div>
          </div>
        </div>

        <div id="speakers" style={{"background":"#f5f5f5"}}>
          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="text-4xl">Keynote Speakers</div>
            {/* <div className="w-full text-center h-96 p-36 text-3xl">To Be Confirmed</div> */}
            {/* <Carousel autoPlay infiniteLoop interval={3000} className="w-full text-center pt-12" 
              showArrows={true} 
              onChange={()=>{}} 
              onClickItem={()=>{}} 
              onClickThumb={()=>{}} > */}
              <div className="w-full mt-10">
                <div className="w-full md:h-96 md:flex">
                  <div className="md:flex-1">
                    <img className="w-48 h-96 object-cover mx-auto md:ml-0" 
                      style={{"width": "75%"}} 
                      src="https://engineering.purdue.edu/ECE/Alums/OECE/2021/Images/chen-web.jpg"/>
                  </div>
                  <div className="md:flex-1 md:text-left pt-10 text-center">
                    <div className="text-3xl">Yiran Chen</div>
                    <div className="text-2xl mt-5">Duke University</div>
                    <div className="text-2xl">Professor in the Department of Electrical and Computer Engineering</div>
                    <div className="mt-2"><a className="text-xl underline" href="https://ece.duke.edu/faculty/yiran-chen">Personal Website</a></div>
                    <div className="text-2xl mt-10"><span className="text-blue-600">Talk Title:</span> Cross-Layer Optimization for AI with Algorithm-Hardware Co-design</div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10">
                <div className="w-full md:h-96 md:flex">
                  <div className="md:flex-1 md:text-left pt-10 text-center">
                    <div className="text-3xl">Miriam Leeser</div>
                    <div className="text-2xl mt-5">Northeastern University</div>
                    <div className="text-2xl">Professor in the Department of Electrical and Computer Engineering</div>
                    <div className="mt-2"><a className="text-xl underline" href="https://coe.northeastern.edu/Research/rcl/members/MEL/index.html">Personal Website</a></div>
                    <div className="text-2xl mt-10"><span className="text-blue-600">Talk Title:</span> Machine Learning on FPGAs in the Open Cloud Testbed</div>
                  </div>
                  <div className="md:flex-1">
                    <img className="w-48 h-96 object-cover mx-auto md:ml-0" 
                      style={{"width": "75%"}} 
                      src="https://nets-vo.org/wp-content/uploads/2022/03/Leeser.jpeg"/>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10">
                <div className="w-full md:h-96 md:flex">
                  <div className="md:flex-1">
                    <img className="w-48 h-96 object-cover mx-auto md:ml-0" 
                      style={{"width": "75%"}} 
                      src="https://www.comp.nus.edu.sg/~youy/index_files/yangyou3.png"/>
                  </div>
                  <div className="md:flex-1 md:text-left pt-10 text-center mb-20 md:mb-0">
                    <div className="text-3xl">Yang You</div>
                    <div className="text-2xl mt-5">National University of Singapore</div>
                    <div className="text-2xl">Presidential Young Professor in Computer Science</div>
                    <div className="mt-2"><a className="text-xl underline" href="https://www.comp.nus.edu.sg/~youy/">Personal Website</a></div>
                    <div className="text-2xl mt-10"><span className="text-blue-600">Talk Title:</span> Colossal-AI: A Unified Deep Learning System For Large-Scale Parallel Training</div>
                  </div> 
                </div>
              </div>
              {/* <div className="w-full text-center h-36 p-20 text-3xl">To Be More...</div> */}
              {/* <div className="w-full">
                <div className="w-full h-96 text-3xl pt-40">
                  To Be Confirmed
                </div>
              </div> */}
            {/* </Carousel>  */}
            {/* <div className="flex mt-10">
              <div className="flex-1">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
              <div className="flex-1 ml-5">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex-1">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
              <div className="flex-1 ml-5">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="flex-1">
                <img className="w-full" src="https://trustlogworkshop.github.io/images/nc.jpeg"/>
              </div>
              <div className="flex-1 ml-5">
                <div className="text-3xl">Dr. Nitesh V. Chawla</div>
                <div className="mt-3 text-xl">Frank M. Freimann Professor, the University of Notre Dame</div>
                <div className="mt-5 text-justify">Nitesh V. Chawla is the Frank M. Freimann Professor of Computer Science and Engineering at the University of Notre Dame. He is the Founding Director of the Lucy Family Institute for Data and Society. He has also served as the director of the Center for Network and Data Science. He is a Fellow of IEEE. Chawla, who joined the Notre Dame faculty in 2007, is an expert in artificial intelligence, data science, and network science, and is motivated by the question of how technology can advance the common good through interdisciplinary research. As such, his research is not only at the frontier of fundamental methods and algorithms but is also making interdisciplinary advances through collaborations with faculty at Notre Dame and community, national, and international partners.</div>
              </div>
            </div> */}
          </div>
        </div>

        <div id="organizers" className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Organizing Chairs</div>
          <div className="mt-10">
            <div className="flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/dongkuan.jpg?raw=true" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="http://personal.psu.edu/dux19/">Dongkuan (DK) Xu</a></div>
                <div>Assistant Professor</div>
                <div>North Carolina State University</div>
              </div>
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://www6.njit.edu/uws/ldapimage.php?uid=hw32&format=full" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://web.njit.edu/~hw32/">Hua Wei</a></div>
                <div>Assistant Professor</div>
                <div>New Jersey Institute of Technology</div>
              </div>
              <div className="mt-5 md:flex-1 md:mt-0 ">
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://www.ang-li.com/images/profile.png" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://www.ang-li.com/">Ang Li</a></div>
                <div>Research Associate</div>
                <div>Qualcomm AI Research</div> 
              </div>
            </div>

            <div className="flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/peipei.jpeg?raw=true" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://peipeizhou-eecs.github.io/">Peipei Zhou</a></div>
                <div>Assistant Professor</div>
                <div>University of Pittsburgh</div> 
              </div> 
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://caiwending.cse.uconn.edu/wp-content/uploads/sites/2888/2019/08/DSC_8595.jpg" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://caiwending.cse.uconn.edu/">Caiwen Ding</a></div>
                <div>Assistant Professor</div>
                <div>University of Connecticut</div> 
              </div>
              <div className="mt-5 mx-auto md:flex-1 md:mt-0">
                <div className="h-48 overflow-hidden">
                  <img className="md:w-1/2 m-auto" src="https://i0.wp.com/eiclab.net/wp-content/uploads/2019/09/Yingyan_Lin_Profile.jpg?resize=250%2C216&ssl=1" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://eiclab.net/team-2/">Yingyan (Celine) Lin</a></div>
                <div>Associate Professor</div>
                <div>Georgia Institute of Technology</div> 
              </div>
            </div>
          </div>

          <div className="flex text-center mt-10 flex-wrap md:flex-no-wrap">
            <div className="mt-5 md:flex-1 md:mt-0">
              <div className="h-48 overflow-hidden">
                <img className="w-1/2 m-auto" src="https://coe.northeastern.edu/wp-content/uploads/profiles/ece/wang-y.jpg" />
              </div>
              <div className="mt-3"><a className="text-blue-600" href="https://coe.northeastern.edu/people/wang-yanzhi/">Yanzhi Wang</a></div>
              <div>Associate Professor</div>
              <div>Northeastern University</div> 
            </div>
            <div className="flex-1"></div>
            <div className="flex-1"></div>
          </div>

          <div className="text-4xl mt-10">Publicity Chair</div>
            <div className="flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-48 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/jianwei.jpg?raw=true" />
                </div>
                <div className="mt-3"><a className="text-blue-600" href="https://jianwei.gatsbyjs.io/">Jianwei Li</a></div>
                <div>Moffett.AI</div>
              </div>
              <div className="flex-1"></div>
              <div className="flex-1"></div>
            </div> 
          </div>

        <div className="text-center py-10 text-sm text-gray-300 bg-black">
          <div>© 2022 NCSU DK Lab, All rights reserved</div>
          <div>(Last update: Jan 23, 2023.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
