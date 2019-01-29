pipeline {
  node('node') {
    currentBuild.result = "SUCCESS"
    try {
       stage('Checkout'){
          checkout scm
       }

       stage('Test'){
         env.REACT_APP_NODE_ENV = "test"

         print "Environment will be : test"

         sh 'node -v'
         sh 'npm prune'
         sh 'npm install'
         sh 'npm test'

       }

       stage('Cleanup'){

         echo 'prune and cleanup'
         sh 'npm prune'
         sh 'rm node_modules -rf'
       }
    }
    catch (err) {

        throw err
    }
}
}