import {Logo} from "../components/Logo";
import {FormEvent, useState} from "react";
import {gql, useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";


const CREATE_SUBSCRIBE = gql(`
mutation MyMutation ($name: String!, $email: String!){
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}`)

export function Subscribe() {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, {loading}] = useMutation(CREATE_SUBSCRIBE)

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event/lesson/opening')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo/>
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Build a <strong className="text-blue-500">complete application</strong> from scratch
                        with <strong className="text-blue-500">React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        In just one week you will master in practice one of the
                        most used technologies and with high demand to access the best opportunities on the market.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded min-w-[391px]">
                    <strong className="uppercase text-2xl mb-6 block">sign up for free</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            type="text"
                            placeholder="You name complete"
                            className="bg-gray-900 rounded px-5 h-14"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="You e-mail"
                            className="bg-gray-900 rounded px-5 h-14"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-gray-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <img
                src="https://user-images.githubusercontent.com/83095574/175466234-318a413f-cf10-4faf-a965-730d94f6afa0.png"
                className="mt-10" alt="bg-code.png"/>
        </div>
    )
}