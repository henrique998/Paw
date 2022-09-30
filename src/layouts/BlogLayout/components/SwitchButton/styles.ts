import * as Switch from "@radix-ui/react-switch"
import styled from "styled-components"

export const SwitchButtonContainer = styled(Switch.Root)`
    width: 4.375rem;
    height: 2rem;
    border-radius: 2rem;
    background-color: #F5F5F5;
    padding: 6px;

    &[data-state="checked"] {
        background-color: #404040;
    }
`

export const SwitchButtonIndicator = styled(Switch.Thumb)`
    display: block;

    width: 1.25rem;
    height: 1.25rem;
    background-color: ${props => props.theme["base-text-3"]};
    border-radius: 50%;

    transition: transform 100ms;
    will-change: transform;

    &[data-state="checked"] {
        background-color: ${props => props.theme["base-brand"]};
        transform: translateX(36px);
    }
`