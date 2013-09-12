import os
import subprocess

from django.core.management.commands.runserver import Command as RunserverCommand


class Command(RunserverCommand):
    def inner_run(self, *args, **options):
        self.grunt()
        return super(Command, self).inner_run(*args, **options)

    def grunt(self):
        self.stdout.write('Running Grunt')
        self.grunt_process = subprocess.Popen(
            ['grunt --gruntfile=Gruntfile.js --base=.'],
            shell=True,
            stdin=subprocess.PIPE,
            stdout=self.stdout,
            stderr=self.stderr,
        )
