![alt text](https://github.com/ronjonsilver/GEX/blob/master/public/logo.png "GEX Logo")

### TO USE THE GEX GITHUB

For a list of helpful git commands use the git cheetsheet: https://services.github.com/on-demand/downloads/github-git-cheat-sheet/

#### 1. Forking from GEX and bringing the code to your local machine

Begin by forking the GEX code by pressing the fork button located at http://github.com/ronjonsilver/GEX. Forking will allow you to have a copy of the GEX code in your personal github and will give you a way to request GEX to pull your changes. 

In order to bring the GEX code to your local machine you must make a clone of the fork you have created. 

a. On GitHub, navigate to your fork of the GEX repository.

b. Under the repository name, click ``` Clone or download ```.

c. Open a commandline in the location you would like your code to be saved and use the command:

```
 git clone https://github.com/YOUR-GITHUB_USERNAME/GEX
```

#### 2. Saving your changes to your repository

In order to push your code to your repository you will have to stage your files to commit. You can stage your files by using the following commands:

"Adds modified and new files that are not .ignored to the stage"
```
git add * :/
```

To finish your commit (which will save your current files) use the command:
```
git commit -a -m "Useful Comment of Your Changes/Additions"
```

Now you can push your comitted changes to your repository with the following commands:

```
git push origin master
```
or

```
git push https://github.com/YOUR-GITHUB_USERNAME/GEX master
```

#### 4. Configuring a remote for a fork (Do this only once!)

You must configure a remote that points to the upstream repository in Git to sync changes you make in a fork with the original repository. This also allows you to sync changes made in the original repository with the fork. Be sure to be in the correct directory of your local GEX project, and follow these steps to configure a remote for the fork, you only have to do these steps once: 

```
git remote -v
```

you should see the following:
```
origin  https://github.com/YOUR_USERNAME/GEX.git (fetch)
origin  https://github.com/YOUR_USERNAME/GEX.git (push)
```

Specify a new remote upstream repository that will be synced with the fork:
```
git remote add upstream https://github.com/ronjonsilver/GEX.git
```

Now verify the new upstream repository you've specified for your fork:
```
git remote -v
```

and you should see the following:
```
origin    https://github.com/YOUR_USERNAME/GEX.git (fetch)
origin    https://github.com/YOUR_USERNAME/GEX.git (push)
upstream  https://github.com/ronjonsilver/GEX.git (fetch)
upstream  https://github.com/ronjonsilver/GEX.git (push)
```


Now you have created a remote Configuration that you will use when merging files, only do the above steps once.


#### 5. Pulling and merging changes from GEX into your local machine

When changes have been made to the code https://github.com/ronjonsilver/GEX, your github will be behind. So you will have to pull the changes to your local machine, merge them, and then push them to your repository. To pull changes from GEX, after onfiguring a remote, follow these steps:

Fetch the branches and their respective commits from the upstream repository. Commits to master will be stored in a local branch, upstream/master.
```
git fetch upstream
```

Check out your fork's local master branch.
```
git checkout master
```

Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes.
```
git merge upstream/master
```
If your local branch didn't have any unique commits, Git will instead perform a "fast-forward":
```
$ git merge upstream/master
	Updating 34e91da..16c56ad
	Fast-forward
	 README.md                 |    5 +++--
	 1 file changed, 3 insertions(+), 2 deletions(-)
```

#### 6. Getting your code onto GEX

Once you have made changes to your personal repository you can request for GEX to pull your changes into the original repository. To do this you have to create a pull request. One way of creating a pull request is to go to http:/github.com/YOUR-GITHUB-USERNAME/GEX and there is a button labeled "New Pull Request". After creating a pull request your changes have to be reviewed and then either accepted or denied.
