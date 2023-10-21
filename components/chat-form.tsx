"use client";

import {ChatRequestOptions} from 'ai'
import React, { ChangeEvent, FormEvent } from 'react'

interface ChatFormProps {
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
    isLoading: boolean;
}

export const ChatForm = ({}: ChatFormProps) => {
  return (
    <div>ChatForm</div>
  )
}