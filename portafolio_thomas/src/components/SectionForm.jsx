import React from 'react'
import { useTranslation } from 'react-i18next'

const SectionForm = () => {
    const [t] = useTranslation("global");
  return (
    <>
    <div className='flex flex-row lg:h-full lg:w-full'>
        <div className='flex flex-col bg-red-200 lg:w-full'>
            <h1>{t("section-form.title")}</h1>
            <p>{t("section-form.description")}</p>
        </div>
        <div className='lg:w-full bg-blue-200'>img</div>
    </div>
    </>
  )
}

export default SectionForm
