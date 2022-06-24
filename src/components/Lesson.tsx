import {CheckCircle, Lock} from "phosphor-react";
import {isPast, format} from 'date-fns'
import {Link, useParams} from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
    const {slug} = useParams<{ slug: string }>()

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEE '•' MMM dd '•' K:mm aa")
    const isActiveLesson = slug === props.slug;

    return (
        <Link to={isLessonAvailable ? `/event/lesson/${props.slug}` : ""} className={`group ${isLessonAvailable ? "" : "cursor-default"}`}>
            <span className="text-gray-300}">
                {availableDateFormatted}
            </span>

            <div className={classNames("rounded border border-gray-500 p-4 mt-2", {
                "bg-green-500": isActiveLesson,
                "group-hover:border-green-500": isLessonAvailable,
                "cursor-default": !isLessonAvailable
            })}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={classNames("text-sn flex items-center gap-2 font-medium", {
                            "text-white": isActiveLesson,
                            "text-blue-500 ": !isActiveLesson
                        })}>
                            <CheckCircle size={20}/>
                            Content Released
                        </span>
                    ) : (
                        <span className="text-sn text-orange-500 flex items-center gap-2 font-medium group">
                            <Lock size={20}/>
                            Coming Soon
                        </span>
                    )}
                    <span className={classNames("text-xs rounded py-[2px] px-2 border  font-bold",{
                        "border-green-300": !isActiveLesson,
                        "border-white": isActiveLesson,
                        "text-white": isActiveLesson,
                        "border-orange-500": !isLessonAvailable,
                        "text-orange-500": !isLessonAvailable,
                        "text-green-500": isLessonAvailable && !isActiveLesson,
                    })}>
                        {props.type === 'live' ? 'live' : 'Practice Class'}
                    </span>
                </header>
                <strong className={classNames(" mt-5 block", {
                    "text-gray-200": !isActiveLesson,
                    "text-white": isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}