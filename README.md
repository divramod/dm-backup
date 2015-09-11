# dm-backup
backup helper

## Description
* started project --> look at the [todos](todo.md) to see what will be done

## Run
```
dmb [task]
dm-backup [task]
```

## Install

```
npm install dm-backup -g # for global use
npm install dm-backup --save # for programmatically use
```

## Tasks

### [diff](tasks/diff/index.js)
* diffs two directories recursivly

#### diff global usage
```
dmb [diff]
```

#### diff programmatically usage
```javascript
var diff = require("dm-backup").diff;
var diffResult = diff.start();
```

#### diff steps

#### diff features

#### diff config
```javascript
{
    "diff": {
    }
}
```

### [sync](tasks/sync/index.js)
* syncs two directories

#### sync global usage
```
dmb [sync]
```

#### sync programmatically usage
```javascript
var sync = require("dm-backup").sync;
var syncResult = sync.start();
```

#### sync steps

#### sync features

#### sync config
```javascript
{
    "sync": {
    }
}
```

### [exampleAsync](tasks/exampleAsync/index.js)
* 

#### exampleAsync global usage
```
dmb [exampleAsync]
```

#### exampleAsync programmatically usage
```javascript
var exampleAsync = require("dm-backup").exampleAsync;
var exampleAsyncResult = exampleAsync.start();
```

#### exampleAsync steps

#### exampleAsync features

#### exampleAsync config
```javascript
{
    "exampleAsync": {
    }
}
```

### [exampleSync](tasks/exampleSync/index.js)
* 

#### exampleSync global usage
```
dmb [exampleSync]
```

#### exampleSync programmatically usage
```javascript
var exampleSync = require("dm-backup").exampleSync;
var exampleSyncResult = exampleSync.start();
```

#### exampleSync steps

#### exampleSync features

#### exampleSync config
```javascript
{
    "exampleSync": {
    }
}
```

## Config
* you can place a .dm-backup.json file in your home directory (~/.dm-backup.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned

## Links
* http://www.tecmint.com/rsync-local-remote-file-synchronization-commands/
* http://www.mikerubel.org/computers/rsync_snapshots/
