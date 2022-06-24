import {CaretRight, DiscordLogo, FileArrowDown, Image, Lightning} from "phosphor-react";
import {DefaultUi, Player, Youtube} from "@vime/react";

import "@vime/core/themes/default.css"
import {gql, useQuery} from "@apollo/client";


const GetLessonBySlug = gql`
query GetLessonBySlug ($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {   
      name
      bio
      avatarURL
    }
  }
}
`

interface VideoProps {
    lessonSlug: string
}

interface GetLessonBySlugResponse {
    lesson: {
        title: string,
        videoId: string,
        description: string,
        teacher: {
            name: string,
            bio: string,
            avatarURL: string,
        }
    }
}

export function Video(props: VideoProps) {

    const {data} = useQuery<GetLessonBySlugResponse>(GetLessonBySlug, {
        variables: {
            slug: props.lessonSlug
        }
    })

    if (!data) {
        return (
            <div className="flex-1">
                <p>Loading...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            {/* Video */}
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video ">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}/>
                        <DefaultUi/>
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex item-start gap-16">
                    {/*Title*/}
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">{data.lesson.title}</h1>
                        <p className="mt-4 leading-relaxed text-gray-200">{data.lesson.description} </p>
                        <div className="flex items-center gap-4 mt-6">
                            <img
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                                src={data.lesson.teacher.avatarURL}
                                alt="profile"
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm black">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                    </div>
                    {/*Buttons*/}
                    <div className="flex flex-col gap-4">
                        <a href="#"
                           className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Community discord
                        </a>
                        <a href="#"
                           className="p-4 text-sm bg-transparent border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center  hover:bg-blue-500 hover:text-black">
                            <Lightning size={24}/>
                            Community discord
                        </a>
                    </div>
                </div>
                {/*Cards*/}
                <div className="gap-8 mt-20 grid grid-cols-2 flex">
                    <a href="https://efficient-sloth-d85.notion.site/Material-complementar-86d4ef35af16471ebc3ae3eba1a378e5"
                       target="_blank"
                       className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                    >
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong>Complementary Material</strong>
                            <p>Access the complementary material to accelerate you development</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1mxWnvlqmH7MbVRv2Na9xFNgCQCygM1iR"
                       target="_blank"
                       className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                    >
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <Image size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong>Exclusive Wallpapers</strong>
                            <p>Download exclusive Ignite Lab wallpapers and customize your machine</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}