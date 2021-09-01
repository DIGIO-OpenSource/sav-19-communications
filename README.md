# sav-19-communications

This package is a wrapper around SAV-19 API and Websockets. It is written in Typescript.

## Installation
The package is available through NPM.

NPM:
```sh
npm install sav-19-communications
```

## Usage

Using Typescript or bundler:

```
import SavCommunications from 'sav-19-communications'

const api = new SavCommunications('YOUR_BASE_URL')
```

Using native NodeJS:

```
const SavCommunications = require('sav-19-communications').default

const api = new SavCommunications('SAV19_BASE_URL')
```

## Example

### API
```
async function getParams(){
  try{
    const result = await api.parameters.getParams({
      params: [1,12,4]
    })
    console.log(result)
  }
  catch(e){
    console.log(e.message)
  }
}

```

