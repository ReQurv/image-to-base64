
# Convert image file to Base64

The project simplifies the task of converting images loaded from a browser to the Base64 format.




## Authors

- [@ReQurv](https://github.com/ReQurv)
## Installation

Install with **yarn**:

```bash
  yarn add @requrv/image-to-base64
```

Install with **npm**:

```bash
  npm install @requrv/image-to-base64
```
## Usage/Examples

```typescript
import { convertImage } from '@requrv/image-to-base64'

async function convert(file: File) {
    return await convertImage(file)
}
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

