import { Module } from "danet/mod.ts";
import {DockerService} from "./src/docker.service";
import {DockerRouter} from "./src/docker.controller";

@Module({
    controllers: [DockerRouter],
    injectables: [ DockerService]
})
export class DockerModule {}