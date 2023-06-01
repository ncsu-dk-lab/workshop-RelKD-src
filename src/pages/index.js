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
            <div className="mr-5 font-bold">RelKD@2023</div>
            {/* <div className="mr-5 text-sm text-gray-300">
              <a href="#about">About</a>
            </div> */}
            <div className="hidden md:flex">
              <div className="mr-5 text-sm text-gray-300">
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
              </div>
            </div>
            {/* <div className="mr-5 text-sm text-gray-300">
              <a href="#contact">Contact</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="pt-16">
        <div className="hidden md:block flex flex-row ">
          <div className="w-full" style={{
            "backgroundImage": 'url("https://kdd.org/kdd2023/wp-content/uploads/2022/12/KDD-2023-Wave-v3.jpg")',
            "height": "68vh",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "top",
            "backgroundSize": "cover",
            "paddingTop": "0vh"
          }}>
          </div>
        </div>
        <div className="md:hidden flex flex-row ">
          <div className="w-full" style={{
            "backgroundImage": 'url("https://kdd.org/kdd2023/wp-content/uploads/2022/12/KDD-2023-Wave-v3.jpg")',
            "height": "68vh",
            "backgroundRepeat": "no-repeat",
            "backgroundPosition": "35% top",
            "backgroundSize": "cover",
            "paddingTop": "0vh"
          }}>
          </div>
        </div>

        <div id="cfp" style={{"background":"#f5f5f5"}} className="pt-10">
          <div className="text-black text-4xl font-semibold text-center">
          International Workshop on Resource-Efficient Learning for Knowledge Discovery
          </div>
          <div className="text-black text-center mt-2">
            Colocated with the <a href="https://kdd.org/kdd2023/" className="underline">29TH ACM SIGKDD CONFERENCE ON KNOWLEDGE DISCOVERY AND DATA MINING</a>
          </div>

          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="mt-5 text-xl px-3 md:px-0 md:text-justify ">
              {/* <div className="text-4xl">Accepted papers</div>
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
              </ul> */}

              {/* <div className="text-4xl mt-8">Call for Reviewers</div>
              <div className="mt-5 leading-8">We are looking for reviewers! If interested, please fill out this <a className="text-blue-600" href="https://docs.google.com/forms/d/1KaQCnRqRpTo4UXkSCLxNVAovrr0cnNFW8MutD482h9c/edit">form</a>. We will be selecting multiple Top Reviewer Awards.</div>  */}
              
              <div className="text-4xl mt-8">Call for Papers</div>
              <div className="mt-5 leading-8">Modern machine learning techniques, especially deep neural networks, have demonstrated excellent performance for various knowledge discovery and data mining applications. However, the development of many of these techniques still encounters resource constraint challenges in many scenarios, such as limited labeled data (data-level), small model size requirements in real-world computing platforms (model-level), and efficient mapping of the computations to heterogeneous target hardware (system-level). Addressing all of these metrics is critical for the effective and efficient usage of the developed models in a wide variety of real systems, such as large-scale social network analysis, large-scale recommendation systems, and real-time anomaly detection. Therefore, it is desirable to develop efficient learning techniques to tackle challenges of resource limitations from data, model/algorithm, or (and) system/hardware perspectives. The proposed international workshop on "Resource-Efficient Learning for Knowledge Discovery (RelKD 2023)" will provide a great venue for academic researchers and industrial practitioners to share challenges, solutions, and future opportunities of resource-efficient learning.
              </div>
              <div className="mt-5 leading-8">The goal of this workshop is to create a venue to tackle the challenges that arise when modern machine learning techniques (e.g., deep neural networks) encounter resource limitations (e.g., scarce labeled data, constrained computing devices, low power/energy budget). The workshop shall focus on machine learning techniques used for knowledge discovery and data science applications, with a focus on efficient learning from three angles: data, algorithm/model, and system/hardware. The topics of interest will include:</div>
              <div className="mt-5">
                <ul className="list-disc pl-5">
                  <li className="py-1"><span className="font-bold">Data-efficient learning:</span> Self-supervised/unsupervised learning, semi/weakly-supervised learning, few-shot learning, and their applications to various data modalities (e.g., graph, user behavior, text, web, image, time series) and data science problems (e.g., social media, healthcare, recommendation, finance, multimedia)</li>
                  <li className="py-1"><span className="font-bold">Algorithm/model-efficient learning:</span> Neural network pruning, quantization, acceleration, sparse learning, neural network compression, knowledge distillation, neural architecture search, and their applications on various data science problems.</li>
                  <li className="py-1"><span className="font-bold">System/hardware-efficient learning:</span> Neural network-hardware co-design, real-time and energy-efficient learning system design, hardware accelerators for machine learning, and their applica- tions on various data science problems.</li>
                  <li className="py-1"><span className="font-bold">Joint-efficient learning:</span> Any kind of joint-efficient learning algorithms/methods (e.g., data-model joint learning, algorithm-hardware joint learning) and their application on various data science problems.</li>
                </ul>
              </div>
              <div className="mt-5 leading-8">
              The workshop will be a half-day session comprising several invited talks from distinguished researchers in the field, spotlight lightning talks and a poster session where contributing paper presenters can discuss their work, and a concluding panel discussion focusing on future directions. Attendance is open to all registered participants.
              </div>

              <div className="mt-5 leading-8">
              Submitted technical papers should be at least 4 pages long. All papers must be submitted in PDF format using the KDD-23 author kit. Papers will be peer-reviewed and selected for spotlight and/or poster presentation. There will be no formal proceedings for the workshop papers, and we welcome any kinds of submissions, e.g., papers already accepted to or currently under review by other venues, ongoing studies, and so on. We will also select a few outstanding paper awards.
              Submission site: 
              <div className="md:hidden"><a className="text-blue-600" href="/">click here</a></div>
              <div className="hidden md:block"><a className="text-blue-600" href="https://cmt3.research.microsoft.com/RelKD2023/Submission/Index">https://cmt3.research.microsoft.com/RelKD2023/Submission/Index</a></div>
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
                    <div className="text-red-600">05/31/2023</div>
                    <div>06/30/2023</div>
                    <div>07/06/2023</div>
                    <div>08/07/2023 (expected)</div>
                  </div>
                </div>
              </div>
              <div className="md:hidden">
                <div className="mt-5 leading-8 flex">
                  <div className="flex-1 text-xl">
                    <div>Paper Submission Deadline:</div>
                    <div className="text-base mb-3 text-red-600">06/07/2023</div>
                    <div>Notification of Acceptance:</div>
                    <div className="text-base mb-3">06/30/2023</div>
                    <div>Camera-Reday Deadline:</div>
                    <div className="text-base mb-3">07/06/2023</div>
                    <div>Workshop Date:</div>
                    <div className="text-base mb-3">08/07/2023 (expected)</div>
                  </div>
                </div>
              </div>

              <div className="text-3xl mt-10">Contact us</div>
              <div className="mt-5">For any questions, please reach out to the organization's email address: <a className="text-blue-600" href="mailto: relkdorg@googlegroups.com">relkdorg@googlegroups.com</a> or any organizer’s email address.</div>
              

              {/* <div className="mt-5">Concretely, we ask members of the community to submit an abstract (250 words or fewer) describing the work and one or more of the following accompanying materials that describe the work in further detail. Higher quality accompanying materials improve the likelihood of acceptance and of spotlighting work with an oral presentation.</div> */}

              {/* <ul className="list-disc pl-5 mt-5">
                <li className="py-1">A workshop paper of approximately four pages in length.</li>
                <li className="py-1">A position paper or survey paper with no page limit.</li>
                <li className="py-1">A poster presenting results of work-in-progress.</li>
                <li className="py-1">A published paper in the form that it was published.</li>
                <li className="py-1">A link to a blog post (e.g., distill.pub, Medium) describing results.</li>
              </ul> */}
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
                  <div>Invited talk 1: 
                    {/* <a className="text-blue-600" href="/">Jiawei Han</a> */}
                  </div>
                  <div className="mt-5 text-gray-600">TBD</div>
                </div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">09:30am-10:00am</div>
                <div className="flex-1 text-center">
                  <div>Invited talk 2: 
                    {/* <a className="text-blue-600" href="/">Jie Tang</a> */}
                  </div>
                  <div className="mt-5 text-gray-600">TBD</div>
                </div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">10:00am-10:30am</div>
                <div className="flex-1 text-center">Spotlight paper presentations</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">10:30am-11:00am</div>
                <div className="flex-1 text-center">Poster and social session (coffee break)</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">11:00am-11:30am</div>
                <div className="flex-1 text-center">
                  <div>Invited talk 3: 
                    {/* <a className="text-blue-600" href="/">Farinaz Koushanfar</a> */}
                  </div>
                  <div className="mt-5 text-gray-600">TBD</div> 
                </div> 
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 mt-3 pb-3">
                <div className="w-100">11:30am-12:00am</div>
                <div className="flex-1 text-center">Panel discussion</div>
                <div className="w-100">Livestream</div>
              </div>
              <div className="flex border-b-2 pb-3">
                <div className="w-100">12:00pm-12:10pm</div>
                <div className="flex-1 text-center">Closing remarks</div>
                <div className="w-100">Livestream</div>
              </div>
            </div>
          </div>
        </div>

        <div id="speakers" style={{"background":"#f5f5f5"}}>
          <div className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10">
            <div className="text-4xl">Keynote Speakers</div>
            <div className="text-3xl text-center my-40">To Be Confirmed</div>
            <div className="hidden">
              <div className="w-full mt-10">
                <div className="w-full md:h-96 md:flex">
                  <div className="md:flex-1">
                    <img className="w-48 h-96 object-cover mx-auto md:ml-0" 
                      style={{"width": "75%"}} 
                      src="https://cs.illinois.edu/_sitemanager/viewphoto.aspx?id=13293&s=450"/>
                  </div>
                  <div className="md:flex-1 md:text-left pt-10 text-center">
                    <div className="text-3xl">Jiawei Han</div>
                    <div className="text-2xl mt-5">University of Illinois at Urbana-Champaign</div>
                    <div className="text-2xl">Michael Aiken Chair Professor at Department of Computer Science</div>
                    <div className="mt-2"><a className="text-xl underline" href="http://hanj.cs.illinois.edu/">Personal Website</a></div>
                    <div className="text-2xl mt-10"><span className="text-blue-600">Talk Title:</span> TBD </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10">
                <div className="w-full md:h-96 md:flex">
                  <div className="md:flex-1 md:text-left pt-10 text-center">
                    <div className="text-3xl">Jie Tang</div>
                    <div className="text-2xl mt-5">Tsinghua University</div>
                    <div className="text-2xl">Full Professor at Department of Computer Science</div>
                    <div className="mt-2"><a className="text-xl underline" href="http://keg.cs.tsinghua.edu.cn/jietang/">Personal Website</a></div>
                    <div className="text-2xl mt-10"><span className="text-blue-600">Talk Title:</span> TBD </div>
                  </div>
                  <div className="md:flex-1">
                    <img className="w-48 h-96 object-cover mx-auto md:ml-0" 
                      style={{"width": "75%"}} 
                      src="http://keg.cs.tsinghua.edu.cn/jietang/pics/Jie-0.jpg"/>
                  </div>
                </div>
              </div>
              <div className="w-full mt-10">
                <div className="w-full md:h-96 md:flex">
                  <div className="md:flex-1">
                    <img className="w-48 h-96 object-cover mx-auto md:ml-0 object-left" 
                      style={{"width": "75%"}} 
                      src="https://github.com/ncsu-dk-lab/workshops/blob/main/reources/imgs/Farinaz-Koushanfar.png?raw=true"/>
                  </div>
                  <div className="md:flex-1 md:text-left pt-10 text-center mb-20 md:mb-0">
                    <div className="text-3xl">Farinaz Koushanfar</div>
                    <div className="text-2xl mt-5">University of California San Diego</div>
                    <div className="text-2xl">Full Professor at Department of Electrical and Computer Engineering.</div>
                    <div className="mt-2"><a className="text-xl underline" href="https://farinaz.eng.ucsd.edu/home">Personal Website</a></div>
                    <div className="text-2xl mt-10"><span className="text-blue-600">Talk Title:</span> TBD </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="organizers" className="max-w-screen-md max-w-screen-lg mx-auto px-2 py-10 text-xl">
          <div className="text-4xl">Organizing Chairs</div>
          <div className="mt-10">
            
            <div className="md:flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://chuxuzhang.github.io/CXZ.jpeg" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://chuxuzhang.github.io/">Chuxu Zhang</a></div>
                <div><a className="text-blue-600" href="mailto: chuxuzhang@brandeis.edu">chuxuzhang@brandeis.edu</a></div>
                <div>Assistant Professor</div>
                <div>Brandeis University</div>
              </div>
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/dongkuan.jpg?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://dongkuanx27.github.io/">Dongkuan (DK) Xu</a></div>
                <div><a className="text-blue-600" href="mailto: dxu27@ncsu.edu">dxu27@ncsu.edu</a></div>
                <div>Assistant Professor</div>
                <div>North Carolina State University</div>
              </div>
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/ncsu-dk-lab/workshops/blob/main/reources/imgs/Mojan.jpeg?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://sites.google.com/view/mojan-javaheripi/home">Mojan Javaheripi</a></div>
                <div><a className="text-blue-600" href="mailto: mojan@ucsd.edu">mojan@ucsd.edu</a></div>
                <div>Senior Researcher</div>
                <div>Microsoft Research</div>
              </div>
            </div>

            <div className="md:flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://www.microsoft.com/en-us/research/uploads/prod/2019/05/image-2019-05-01.jpg" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://www.microsoft.com/en-us/research/people/submukhe/">Subhabrata (Subho) Mukherjee</a></div>
                <div><a className="text-blue-600" href="mailto: subhabrata.mukherjee@microsoft.com">subhabrata.mukherjee@microsoft.com</a></div>
                <div>Principal Researcher</div>
                <div>Microsoft Research</div> 
              </div> 
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/ncsu-dk-lab/workshops/blob/main/reources/imgs/lingfei.jpeg?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://sites.google.com/a/email.wm.edu/teddy-lfwu/">Lingfei Wu</a></div>
                <div><a className="text-blue-600" href="mailto: lwu@pinterest.com">lwu@pinterest.com</a></div>
                <div>Engineering Manager</div>
                <div>Pinterest</div> 
              </div>
              <div className="mt-5 mx-auto md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="md:w-1/2 m-auto" src="https://github.com/ncsu-dk-lab/workshops/blob/main/reources/imgs/xiaoyinglong.jpeg?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://sites.google.com/site/yinglongxia/">Yinglong Xia</a></div>
                <div><a className="text-blue-600" href="mailto: yinglong.xia.2010@ieee.org">yinglong.xia.2010@ieee.org</a></div>
                <div>Applied Research Scientist</div>
                <div>Meta AI</div> 
              </div>
            </div>

            <div className="md:flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/ncsu-dk-lab/workshops/blob/main/reources/imgs/jundong.png?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="http://www.ece.virginia.edu/~jl6qk/">Jundong Li</a></div>
                <div><a className="text-blue-600" href="mailto: jundong@virginia.edu">jundong@virginia.edu</a></div>
                <div>Assistant Professor</div>
                <div>University of Virginia</div> 
              </div>
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/ncsu-dk-lab/workshops/blob/main/reources/imgs/meng.jpeg?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="http://www.meng-jiang.com/">Meng Jiang</a></div>
                <div><a className="text-blue-600" href="mailto: mjiang2@nd.edu">mjiang2@nd.edu</a></div>
                <div>Assistant professor </div>
                <div>University of Notre Dame</div> 
              </div>
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://coe.northeastern.edu/wp-content/uploads/profiles/ece/wang-y.jpg" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://coe.northeastern.edu/people/wang-yanzhi/">Yanzhi Wang</a></div>
                <div><a className="text-blue-600" href="mailto: yanz.wang@northeastern.edu">yanz.wang@northeastern.edu</a></div>
                <div>Associate Professor</div>
                <div>Northeastern University</div> 
              </div>
            </div>
          </div>

          <div className="text-4xl mt-10">Publicity Chair</div>
            <div className="md:flex text-center mt-10 flex-wrap md:flex-no-wrap">
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="w-1/2 m-auto" src="https://github.com/mexiQQ/trust-ai-code/blob/main/src/images/jianwei.jpg?raw=true" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://jianwei.gatsbyjs.io/">Jianwei Li</a></div>
                <div><a className="text-blue-600" href="mailto: jianwei.li@moffett.ai">jianwei.li@moffett.ai</a></div>
                <div>Moffett.AI</div> 
              </div>
              <div className="mt-5 md:flex-1 md:mt-0">
                <div className="h-40 overflow-hidden">
                  <img className="h-40 w-1/2 m-auto object-cover object-center" src="https://aragakiyuiii.github.io/images/img.png" />
                </div>
                <div className="mt-3 text-2xl"><a className="text-blue-600" href="https://aragakiyuiii.github.io/">Chunhui Zhang</a></div>
                <div><a className="text-blue-600" href="mailto: chunhuizhang@brandeis.edu">chunhuizhang@brandeis.edu</a></div>
                <div>Brandeis University</div> 
              </div>
              <div className="flex-1"></div>
            </div> 
          </div>

        <div className="text-center py-10 text-sm text-gray-300 bg-black">
          <div>©2023 International Workshop on Resource-Efficient Learning for Knowledge Discovery, All rights reserved</div>
          <div>(Last update: May 6, 2023.)</div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
