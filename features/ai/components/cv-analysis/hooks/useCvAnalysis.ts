import { useMutation } from "@tanstack/react-query";
import { uploadCv, analyzeCv } from "../services/cv-analysis.service";
import { CvAnalysisPayload } from "../schemas/cv-analysis.schema";

export const useCvAnalysis = () => {
  return useMutation({
    mutationFn: async ({
      file,
      payload,
    }: {
      file: File;
      payload: CvAnalysisPayload;
    }) => {
      
      const { file_id } = await uploadCv(file);

      const result = await analyzeCv({ ...payload, file_id });
      return result.payload.response;
    },
  });
};