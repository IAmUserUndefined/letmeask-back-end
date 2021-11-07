-- AlterTable
ALTER TABLE `user` MODIFY `verificationTokenExpiryTime` BIGINT NULL DEFAULT 0,
    MODIFY `verifiedEmail` BOOLEAN NULL;
