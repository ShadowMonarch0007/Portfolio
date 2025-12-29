import React from 'react'
import { cn } from "@/lib/utils";
import {Label} from '../components/Label';
import { Input, Textarea } from '../components/input';

const Connect = () => {
  return (
    <div>
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center lg:max-w-[45vw]">
          Ready to take <span className="text-red-500">your</span> digital
          presence to the next level?
        </h1>
      </div>
      <div className="max-w-4xl w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input backdrop-blur-[2.5px] border-2 border-[#e0e0e0] dark:border-[#202020] my-2.5 md:my-5 lg:my-10">
                <h2 className="font-bold text-xl lg:text-2xl text-neutral-800 dark:text-neutral-200">
                    Let&apos;s get in touch
                </h2>
                <p className="text-neutral-600 text-sm lg:text-medium mt-2 dark:text-neutral-300">
                    Reach out to me today and let&apos;s discuss how I can help you.
                </p>

                <form className="my-8" onSubmit={(e) => {
                    handleSubmit(onSubmit)(e);
                }}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                id="firstname"
                                placeholder="Enter your First Name"
                                type="text"
                            />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                id="lastname"
                                placeholder="Enter your Last Name"
                                type="text"
                            />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            placeholder="Enter your Phone Number"
                            type="text"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            placeholder="Enter your Email"
                            type="email"
                        />
                    </LabelInputContainer>
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="help">How can I help you?</Label>
                        <Textarea
                            id="help"
                            placeholder="Enter"
                            type="text"
                        />
                    </LabelInputContainer>

                    <div className="bg-linear-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-px w-full" />

                    <button
                        type="submit"
                        className="bg-linear-to-br relative group/btn from-zinc-300 dark:from-zinc-900 dark:to-neutral-900 to-neutral-300 block bg-zinc-200 dark:bg-zinc-800 w-full text-[#202020] dark:text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    >
                        Send this to me &rarr;
                        <BottomGradient />
                    </button>
                </form>
            </div>
    </div>
  )
}

export default Connect


const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-linear-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};