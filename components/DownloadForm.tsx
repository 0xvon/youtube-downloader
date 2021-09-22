import { FormEventHandler } from "react"
import { Stack } from "@chakra-ui/react"
import { InputControl, SubmitButton } from "formik-chakra-ui"
import { Formik } from "formik"
import * as Yup from "yup"

interface Props {
    submitAction: (videoUrl: string) => void
    isLoading: boolean
}

interface FormValues {
    videoUrl: string
}

export const Component = (props: Props) => {
    const formSchema = Yup.object().shape({
        videoUrl: Yup.string()
            .required("URLが入力されていません")
            .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%_]+&?)?$/,
                "正しいURLを入力してください"
            )
            .matches(
                /youtube.com\/watch\?v=/,
                "youtube.com/v=xxxという形式のURLを入力してください"
            ),
    })
    const onSubmit = async (values: FormValues) => {
        props.submitAction(values.videoUrl)
    }

    return (
        <Formik
            initialValues={{
                videoUrl: "",
            }}
            validationSchema={formSchema}
            onSubmit={async (values) => {
                await onSubmit(values)
            }}
            enableReinitialize={true}
        >
            {({ handleSubmit }) => (
                <Stack
                    width={["90%", "90%", "60%", "60%"]}
                    as="form"
                    onSubmit={
                        handleSubmit as unknown as FormEventHandler<HTMLDivElement>
                    }
                    spacing={6}
                    margin="24px auto"
                >
                    <InputControl name="videoUrl" label="動画URL" />
                    <SubmitButton
                        isLoading={props.isLoading}
                        colorScheme="green"
                    >
                        開始
                    </SubmitButton>
                </Stack>
            )}
        </Formik>
    )
}
