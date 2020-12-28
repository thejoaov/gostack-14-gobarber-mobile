# Components
#### src/components

Custom components.

These components must be classified by their behavior, for example, the `Container` acts like as a base **layout** component.

These components also must be exported trhough `components/index.ts` to better importing:
````js
import { Container, TextInput, PrimaryButton } from 'components'
````
Without this:
````js
import Container from 'components/layout/Container'
import TextInput from 'components/input/TextInput'
import PrimaryButton from 'components/button/PrimaryButton'
````
