import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Skills() {
  return (
    <div className="my-5 ">
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 inline bg-gradient-to-r from-[#8e44ad] to-[#3498db] text-transparent bg-clip-text">Skills</h1>
        <p className="text-[#a5a5a5] mt-2 text-md md:text-lg lg:w-3/12 w-8/12 mx-auto mb-10">
          A showcase of my expertise in various programming languages and tools
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mx-auto w-10/12">
        {/* Programming Languages */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium ">Programming</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/Python.svg" alt="Python" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Python</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/R.svg" alt="R" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">R</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/js.svg" alt="JS" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">JS</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/React.svg" alt="react-js" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">React JS</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        {/* ML Frameworks */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium">ML Frameworks</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/TensorFlow.svg" alt="TensorFlow" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">TensorFlow</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/scikit-learn.svg" alt="Scikit Learn" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Scikit Learn</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        {/* Data Analysis Tools */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium">Analysis Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/google-sheets.svg" alt="Google Sheet" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Google Sheets</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/MySQL.svg" alt="MySQL" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">MySQL</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        {/* Data Manipulation */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium">Data Manipulation</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/NumPy.svg" alt="NumPy" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">NumPy</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/Pandas.svg" alt="Pandas" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Pandas</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        {/* Visualization */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium">Data Manipulation</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/Matplotlib.svg" alt="Matplotlib" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Matplotlib</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/power-bi.svg" alt="power-bi" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Power BI</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        {/* Version Control */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium">Version Control</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/Git.svg" alt="Git" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Git</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col ">
                <img src="/github.svg" alt="GitHub" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">GitHub</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        {/* Development Tools */}
        <Card className="text-center bg-[#001115] rounded-md border-[#002029]">
          <CardHeader>
            <CardTitle className="text-[#a5a5a5] text-lg font-medium">Development Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center items-center ">
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/colaboratory.svg" alt="Colaboratory" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Colaboratory</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/Jupyter.svg" alt="Jupyter" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">Jupyter</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/Visual Studio Code.svg" alt="Visual Studio Code" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">VS Code</p>
              </CardContent>
            </Card>
            <Card className="bg-[#001115] border-none">
              <CardContent className="flex flex-col justify-center items-center">
                <img src="/PyCharm.svg" alt="PyCharm" className="w-[60px]" />
                <p className="text-[#8d99ae] font-medium">PyCharm</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        

      </div>
    </div>
  );
}

export default Skills;
