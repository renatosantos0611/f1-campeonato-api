import { PartialType } from "@nestjs/mapped-types";
import { CreateCampeonatoF1Dto } from "./create-campeonatof1.dto";

export class updateCampeonatoF1Dto extends PartialType(CreateCampeonatoF1Dto) {}