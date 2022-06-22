import {CheckCircle} from "phosphor-react";

export function Lesson() {
    return (
        <a href="">
            <span className="text-gray-300">
                Tuesday • Jun 22 • 7:00pt
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">
                    <span className="text-sn text-blue-500 flex items-center gap-2 font-medium">
                        <CheckCircle size={20}/>
                        Content Released
                    </span>
                    <span className="text-xs rounded py-[2px] px-2 text-white border border-green-300 font-bold">
                        Live
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    Opening to event Ignite Lab
                </strong>
            </div>
        </a>
    )
}